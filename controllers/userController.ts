import user from "../model/UserModel";
import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await user.find({});
    res.status(201).json({ message: "Бүх хэрэглэгчийн мэдээлэл", users });
  } catch (error) {
    res.status(400).json({ message: "Бүртгэл амжилгүй боллоо.", error: error });
  }
};

const createUser = async (req: Request, res: Response) => {
  const { name, email, avatar } = req.body;
  if (!name || !email || !avatar) {
    res.status(400).json({ message: "Нэр,email, нууц үг хоосон байна." });
  }
  try {
    const newUser = await user.create({
      name,
      email,
      avatar,
    });
    res.status(201).json({ message: "Амжилттай бүртгэгдлээ", newUser });
  } catch (error) {
    res.status(400).json({ message: "Бүртгэл амжилгүй боллоо.", error: error });
  }
};

export { getAllUsers, createUser };
