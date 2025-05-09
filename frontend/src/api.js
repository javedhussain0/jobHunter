// import { useState } from "react";
// import { submitRating } from "../api";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RateCompany = ({ companyId, token }) => {
//     const [rating, setRating] = useState(0);
//     const [review, setReview] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await submitRating(companyId, rating, review, token);
//             toast.success("Rating submitted successfully!");
//             setRating(0);
//             setReview("");
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Something went wrong!");
//         }
//    };

//     return (
//         <div className="bg-white p-5 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold">Rate this Company</h2>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mt-2">Rating (1-5):</label>
//                 <input
//                     type="number"
//                     min="1"
//                     max="5"
//                     value={rating}
//                     onChange={(e) => setRating(e.target.value)}
//                     className="border p-2 w-full rounded-md"
//                     required
//                 />
//                 <label className="block mt-2">Review:</label>
//                 <textarea
//                     value={review}
//                     onChange={(e) => setReview(e.target.value)}
//                     className="border p-2 w-full rounded-md"
//                     required
//                 />
//                 <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md"
//                 >
//                     Submit Rating
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default RateCompany;
