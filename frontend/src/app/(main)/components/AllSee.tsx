// import { ListStartIcon } from "lucide-react";
// import { CiStar } from "react-icons/ci";
// import { StarIcon } from "./StarIcon";
// import { useState } from "react";
// import { Common } from "./Common";

// export const AllSee = () => {
//   const [butsah, setbutsah] = useState(false);
//   const comments = [
//     {
//       id: 1,
//       title: "Saraa",
//       description: "Ваав материал ёстой гоё байна 😍",
//     },
//     {
//       id: 2,
//       title: "Saraa",
//       image: "🔥🔥🔥",
//       description: "Ваав материал ёстой гоё байна 😍",
//     },
//     {
//       id: 3,
//       title: "Saraa",
//       description: "Ваав материал ёстой гоё байна 😍",
//     },
//     {
//       id: 4,
//       title: "Saraa",
//       description: "Ваав материал ёстой гоё байна 😍",
//     },
//     {
//       id: 5,
//       title: "Saraa",
//       description: "Ваав материал ёстой гоё байна 😍",
//     },
//   ];

//   return (
//     <div className="h-fit grid gap-6 w-full pt-11 border">
//       <div className={`${butsah ? "hidden" : "visible"}`}>
//         <div className="container ">
//           <div className="flex gap-4 text-xl font-normal">
//             <p>Үнэлгээ</p>
//             <button
//               className="text-[#2563EB] border-b-[1.5px] border-[#2563EB]"
//               onClick={() => setbutsah(!butsah)}
//             >
//               бүгдийг хураах
//             </button>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="flex gap-1">
//               <StarIcon />
//             </div>
//             <div className="font-medium text-lg flex">
//               <p className="font-semibold text-lg">4.6</p>
//               <p className="text-[#71717A]">(24)</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid gap-6 pt-4">
//           {comments.map((comment) => {
//             return (
//               <div
//                 className="flex flex-col pb-4 border-b-2 border-dashed"
//                 key={comment.id}
//               >
//                 <div className="flex ">
//                   <p>{comment.title}</p>
//                   <StarIcon />
//                 </div>
//                 <p>{comment.image}</p>
//                 <p>{comment.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className={`${butsah ? "visible" : "hidden"}`}>
//         <Common />
//       </div>
//     </div>
//   );
// };
