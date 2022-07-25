import { prisma } from "../config/database.js";

export const findByTeacherName = async (name: string) => {
  return prisma.teacher.findUnique({
    where: {
      name,
    }
  });
}

//fix-me
export const findByTeacherDiscipline = async (teacherId: number, disciplineId: number) => {
  return prisma.teacher.findFirst({
    where: {
      teacherId,
      disciplineId,
    }
  });
}
