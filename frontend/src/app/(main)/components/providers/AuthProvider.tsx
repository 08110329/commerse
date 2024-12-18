"use client";

import { backend } from "@/axios";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";

interface User {
  id?: string;
  lastName?: string;
  username?: string;
  email: string;
  password: string;
  phone?: number;
  address?: string;
  desc?: string;
  role?: string;
}

interface AuthUser {
  user: User | null;
  isAuthenticated: boolean;
  role?: string;
}

interface UserContextType {
  user: AuthUser;
  register: (user: User) => void;
  login: (email: string, password: string) => void; // Fixed typo here
  logout: () => void;
  products: Products[];
}

interface Products {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  size: string;
  color: string;
  productCode: string;
  torolId: string;
  quantity: number;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<AuthUser>({
    user: null,
    isAuthenticated: false,
    role: undefined,
  });

  const router = useRouter();
  const { id } = useParams();
  const [isReady, setIsReady] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);
  const pathname = usePathname();
  const authPaths = useMemo(
    () => [
      "/login",
      "/register",
      "/",
      "/ProductCategory",
      `/productDetail/newProduct/${id}`,
    ],
    [id]
  );
  const getProducts = async () => {
    try {
      const response = await backend.get("/getProducts");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const register = async (newUser: User) => {
    try {
      const response = await backend.post("/user/register", newUser);
      const { token, user } = response.data;
      console.log(token, user);

      setUser({
        user,
        isAuthenticated: true,
        role: user.role,
      });

      const roleZam = user.role === "admin" ? "/admin" : "/";
      router.push(roleZam);

      toast.success("Бүртгэл амжилттай!");

      localStorage.setItem("token", token);
    } catch (error) {
      toast.error("Бүртгэлтэй холбоотой алдаа гарлаа!");
      console.log("Бүртгэлийн алдаа:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await backend.post("/user/login", { email, password });
      const { token, user } = response.data;

      setUser({
        user,
        isAuthenticated: true,
        role: user.role,
      });

      const roleZam = user.role === "admin" ? "/admin" : "/";
      router.push(roleZam);
      toast.success("Бүртгэл амжилттай!");

      localStorage.setItem("token", token);
      console.log(token);
    } catch (error: any) {
      // Алдааны төрөл, статус код зэргийг шалгаж, илүү тодорхой мессеж харуулж болно
      const errorMessage =
        error.response?.data?.message || "Бүртгэлтэй холбоотой алдаа гарлаа!";

      toast.error(errorMessage);
      console.log("Бүртгэлийн алдаа:", error);
    }
  };

  const logout = () => {
    setUser({ user: null, isAuthenticated: false, role: undefined });

    localStorage.removeItem("token"); // Clear the token on logout
    router.push("/");
    toast.success("Системээс гарлаа!");
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsReady(false);
        const token = localStorage.getItem("token");
        if (!token) return; //omno n if (!token) return bsn

        const { data } = await backend.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser({
          user: data.user,
          isAuthenticated: true,
          role: data.user.role,
        });
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
      } finally {
        setIsReady(true);
      }
    };
    loadUser();
  }, []);

  useEffect(() => {
    if (authPaths.includes(pathname)) return;
    if (!isReady) return;
    if (!user.user) {
      router.replace("/login");
    } else if (user.role === "admin" && pathname !== "/admin") {
      router.replace("/");
    }
  }, [pathname, user, isReady, authPaths, router]);

  if (!isReady) return null;

  // console.log(user.user.id);

  return (
    <UserContext.Provider value={{ user, register, login, logout, products }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
