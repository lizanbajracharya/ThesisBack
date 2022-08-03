import express from "express";
import {
  getRate,
  postRate,
  updateRate,
} from "../controllers/rateController.js";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getRate).post(protect, admin, postRate);
router.route("/:id").put(protect, admin, updateRate);
export default router;
