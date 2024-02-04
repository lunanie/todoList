import { ITodo } from '@store/constants';

export const getTodoListFromLs = () => {
  const todoListFromLs = localStorage.getItem('todos');
  return todoListFromLs ? JSON.parse(todoListFromLs) : [];
};

export const saveTodoListToLs = (todos: ITodo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
