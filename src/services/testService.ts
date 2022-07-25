import * as testRepository from "../repositories/testRepository.js";
import * as categoryRepository from "../repositories/categoryRepository.js";
import * as teacherRepository from "../repositories/teacherRepositoy.js";
import * as disciplineRepository from "../repositories/disciplineRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

interface Filter {
  groupBy: 'disciplines' | 'teachers';
}

interface Test {
  name: string,
  pdfUrl: string,
  category: string,
  discipline: string,
  teacher: string,
}

export const find = async (filter: Filter) => {
  if(filter.groupBy === 'disciplines') {
    return testRepository.viewTestsByDiscipline();
  } else if(filter.groupBy === 'teachers') {
      return testRepository.viewTestsByTeacher();
  }
}

export const createTest = async (test: Test) => {
  const category = await categoryRepository.findByName(test.category);
  if(!category) throw notFoundError("Category not found!");

  const discipline = await disciplineRepository.findByDisciplineName(test.discipline);
  if(!discipline) throw notFoundError("Discipline not found!"); 

  const teacher = await teacherRepository.findByTeacherName(test.teacher);
  if(!teacher) throw notFoundError("Teacher not found!"); 

  const teacherDiscipline = await teacherRepository.findByTeacherDiscipline(teacher.id, discipline.id);
  if(!teacherDiscipline) throw notFoundError("TeacherDiscipline not found!");

}