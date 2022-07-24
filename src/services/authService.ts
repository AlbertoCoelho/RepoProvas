import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import * as repository from "../repositories/authRepository.js";
import { conflictError, unauthorizedError, notFoundError } from "../utils/errorUtils.js";

export type CreateUserData = Omit<User, "id">;

export const createUser = async (user: CreateUserData) => {
  console.log(user);
  const existingUser = await repository.findUserByEmail(user.email);

  if (existingUser) throw conflictError("Email must be unique");

  const SALT = 10;
  //fix-me: process.env.SALT is not working!
  const hashedPassword = bcrypt.hashSync(user.password,SALT);
  await repository.insertUser({...user, password: hashedPassword});
} 

export const login = async (login: CreateUserData) => {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION_TIME });

  return token;
}

export const getUserOrFail = async (login: CreateUserData) => {
  const user = await repository.findUserByEmail(login.email);
  if (!user) throw unauthorizedError("Invalid credentials");

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return user;
}

export const findUserById = async (id: number) => {
  const user = await repository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
}