import { prisma } from "../config/database.js";

export const viewTestsByDiscipline = async () => {
  return prisma.term.findMany({
      select: {
        id: true,
        number: true,
        Disciplines: {
          include: {
            TeacherDisciplines: {
              include: {
                teacher: true,
                Tests: {
                  include: {
                    category: true,
                  }
                },
              },
            },
          },
        },
      },
    });
  }

  export const viewTestsByTeacher = async () => {
    return prisma.teacherDiscipline.findMany({
      select: {
        id: true,
        teacher: true,
        discipline: true,
        Tests: {
          include: {
            category: true,
          }
        },
      },
    });
  }