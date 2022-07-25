import { prisma } from "../config/database.js";


export const findByName = async (name: string) => {
  return prisma.category.findUnique({
    where: {
      name,
    }
  });
}