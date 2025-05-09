// import { useState } from "react";
// import axios from "axios";
// import { FaStar } from "react-icons/fa";

// const JobReviewForm = ({ jobId, fetchReviews }) => {
//   const [rating, setRating] = useState(5);
//   const [hover, setHover] = useState(null);
//   const [comment, setComment] = useState("");
//   const [message, setMessage] = useState(""); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "/api/v1/reviews",
//         { jobId, rating, comment },
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       fetchReviews(); 
//       setComment(""); 
//       setRating(5); 
//       setMessage("✅ Thanks for your review!"); 

//       setTimeout(() => setMessage(""), 3000); 
//     } catch (error) {
//       console.error("Error submitting review", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4 border p-4 rounded shadow">
//       <h4 className="text-lg font-semibold">Leave a Review</h4>

//       <label className="block mt-2">Rating:</label>
//       <div className="flex">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <FaStar
//             key={star}
//             className={`cursor-pointer text-2xl ${
//               (hover || rating) >= star ? "text-yellow-500" : "text-gray-300"
//             }`}
//             onMouseEnter={() => setHover(star)}
//             onMouseLeave={() => setHover(null)}
//             onClick={() => setRating(star)}
//           />
//         ))}
//       </div>

//       <label className="block mt-2">Comment:</label>
//       <textarea
//         className="border rounded p-2 w-full"
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         required
//       />

//       <button
//         type="submit"
//         className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>

//       {message && (
//         <p className="mt-3 text-green-600 font-semibold">{message}</p>
//       )}
//     </form>
//   );
// };

// export default JobReviewForm;
