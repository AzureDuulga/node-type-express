import movie from "../model/moviesModel";
import { Request, Response } from "express";

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await movie.find({}).limit(10);
    res.status(201).json({ message: "Бүх киноны мэдээлэл", movies });
  } catch (error) {
    res.status(400).json({ message: "Бүртгэл амжилгүй боллоо.", error: error });
  }
};

export default getAllMovies;
