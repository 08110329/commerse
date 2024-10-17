"use client";
import { CiStar } from "react-icons/ci";
import { StarIcon } from "./StarIcon";
import { useEffect, useState } from "react";
import { backend } from "@/axios";
import { useUser } from "./providers/AuthProvider";
const totalStars = 5;
interface reviews {
  _id: string;
  userId: string;
  productId: string;
  comment: string;
  rating: string;
  username: string;
}
export const Common = ({ productId }: { productId: string }) => {
  const { user } = useUser();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [start, setStart] = useState(false);
  const [userData, setUserData] = useState({ _id: "", username: "" });
  const [reviews, setReviews] = useState<reviews[]>([]);

  useEffect(() => {
    getReview();
  }, []);
  const getReview = async () => {
    const res = await backend.get("/getReview");
    console.log(res.data.reviews);
    setReviews(res.data.reviews);
  };
  const render = () => {
    getReview();
  };
  // username duudah function
  useEffect(() => {
    const getUsername = async () => {
      const res = await backend.get(`/user/getUser/${user?.user?.id}`);
      setUserData(res.data.user);
      console.log(res.data.user);
    };
    getUsername();
  }, []);

  const createReview = async () => {
    try {
      const res = await backend.post("/createReview", {
        comment: comment,
        userId: userData?._id,
        productId: productId,
        rating: rating,
      });
      console.log(res.data.comment);
    } catch (error) {
      console.log(error);
    }
    render();
    setComment("");
  };
  return (
    <div className={`grid gap-4 ${start ? "hidden" : "visible"}`}>
      <div className="h-fit grid gap-6 w-full pt-1 border">
        <div className="grid gap-6 pt-4">
          {reviews.map((review) => {
            return (
              <div
                className="flex flex-col pb-4 border-b-2 border-dashed"
                key={review._id}
              >
                <div className="flex ">
                  <p>{userData.username}</p>
                  <StarIcon />
                </div>
                {/* <p>{comment.image}</p> */}
                <p>{review.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" p-6 border bg-[#E4E4E7] rounded-xl text-lg font-medium flex flex-col gap-6">
        <div className="grid gap-2">
          <p>Одоор үнэлэх:</p>

          <div className="flex">
            {Array.from({ length: totalStars }, (_, index) => (
              <CiStar
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
          <textarea
            className="p-2 border w-full h-[94px] rounded-lg"
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
