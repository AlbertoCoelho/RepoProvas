import * as repository from "../repositories/testRepository.js";

interface Filter {
  groupBy: 'disciplines' | 'teachers';
}

export const find = async (filter: Filter) => {
  if(filter.groupBy === 'disciplines') {
    return repository.viewTestsByDiscipline();
  }
}