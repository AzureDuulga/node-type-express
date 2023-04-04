import express from "express";
import getAllMovies from "../controllers/moviesController";

const router = express.Router();
router.route("/").get(getAllMovies);

export default router;
