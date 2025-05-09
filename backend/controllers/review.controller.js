import Review from "../models/review.model.js"
// ✅ Add Review for a Product
export const createReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;

    const newReview = await Review.create({
      user: req.user.id,
      product,
      rating,
      comment,
    });

    res.status(201).json({ message: "Review added successfully", newReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Reviews for a Product
export const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId }).populate("user", "name");

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
