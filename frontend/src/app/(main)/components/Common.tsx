"use client";

import { StarIcon } from "./StarIcon";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import { useUser } from "./providers/AuthProvider";
import { FaStar } from "react-icons/fa";
const totalStars = 5;
interface reviews {
  _id: string;
  userId: string;
  productId: string;
  comment: string;
  rating: string;
}
export const Common = () => {
  const { user } = useUser();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState<reviews[]>([]);
  const [userId, setUserId] = useState("");
  const [productId, setproductId] = useState("");
  const [username, setUsername] = useState("")
  // console.log(comment);
  // console.log(reviews);
  console.log(username);
  // console.log("====", productId);

  // console.log(user.user?.id);

  // const createReview = async (
  //   productId: string,
  //   userId: string,
  //   comment: string,
  //   rating: number
  //   // userName: string
  // ) => {
  //   try {
  //     const response = await backend?.post(
  //       "/review/createReview",
  //       {
  //         productId,
  //         userId,
  //         comment,
  //         rating,
  //         // userName,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     setComment("");
  //     setRating(0);
  //     // await getReview(productId);
  //     // getProduct(productId);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log("Review error");
  //     console.log(error);
  //   }
  // };

  const [start, setStart] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      const res = await backend.get("/review/getReview");
      console.log(res.data.reviews);
      setReviews(res.data.reviews);
    };
    getReview();
  }, []);

  const createReview = async () => {
    try {
      const res = await backend.post("/review/createReview", {
        comment: comment,
        userId: userId,
        productId: productId,
      });
      setComment("");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await backend.get("/user");
      console.log(res.data.username);
      setUsername(res.data.username);
    };
    getUser();
  }, []);
  return (
    <div className={`grid gap-4 ${start ? "hidden" : "visible"}`}>
      <div className="h-fit grid gap-6 w-full pt-1 text-black">
        <div className="grid gap-6 pt-4">
          {reviews.map((review) => {
            return (
              <div
                className="flex flex-col pb-4 border-b-2 border-dashed"
                key={review._id}
              >
                <div className="flex ">
                  <p>{review.userId}</p>
                  <StarIcon />
                </div>
                {/* <p>{comment.image}</p> */}
                <p>{review.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" p-6 border bg-[#E4E4E7] rounded-xl text-lg font-medium flex flex-col gap-6 text-black">
        <div className="grid gap-2">
          <p>Одоор үнэлэх:</p>

          <div className="flex">
            {Array.from({ length: totalStars }, (_, index) => (
              <FaStar 
                size={24}
                key={index}
                onClick={() => setRating(index + 1)}
                className={`cursor-pointer ${
                  index < rating ? "text-yellow-500 border " : "text-black"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="text-lg font-medium">
          <p>Сэтгэгдэл үлдээх:</p>
          <input
            className="border w-full h-[94px] rounded-lg"
            placeholder="Энд бичнэ үү"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <button
          onClick={() => createReview()}
          className="text-base font-medium bg-[#2563EB] h-9 w-28 rounded-3xl text-white"
        >
          Үнэлэх
        </button>
      </div>
    </div>
  );
};
