import { prisma } from "../config/database.js";

export const findByDisciplineName = async (name: string) => {
  return prisma.discipline.findUnique({
    where: {
      name,
    }
  });
}