import express from "express";
import { createReview, getProductReviews } from "../controllers/review.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/", isAuthenticated, createReview);

router.get("/:productId", getProductReviews);

export default router;
