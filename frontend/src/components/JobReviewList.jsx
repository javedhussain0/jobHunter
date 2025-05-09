// import { useEffect, useState } from "react";
// import axios from "axios";

// const JobReviewList = ({ jobId }) => {
//   const [reviews, setReviews] = useState([]);

//   const fetchReviews = async () => {
//     try {
//       const { data } = await axios.get(`/api/reviews/${jobId}`);
//       setReviews(data);
//     } catch (error) {
//       console.error("Error fetching reviews", error);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, [jobId]);

//   return (
//     <div className="mt-4 border-t pt-4">
//       <h4 className="text-lg font-semibold">User Reviews</h4>
//       {reviews.length === 0 ? (
//         <p>No reviews yet.</p>
//       ) : (
//         reviews.map((review) => (
//           <div key={review._id} className="border p-2 my-2 rounded shadow-sm">
//             <strong>{review.user.name}</strong>
//             <p>Rating: {review.rating} ⭐</p>
//             <p>{review.comment}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default JobReviewList;
