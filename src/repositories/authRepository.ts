import { prisma } from "../config/database.js";
import { CreateUserData } from "../services/authService.js";

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export const insertUser = async (user: CreateUserData) => {
  return prisma.user.create({
    data: user,
  });
}

export const findById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id }
  });
}