import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v1 as uuidV1 } from 'uuid';
import { ITodo } from '../constants';

type TodoReducerType = {
  todos: ITodo[];
};
export const getTodoListFromLs = () => {
  const todoListFromLs = localStorage.getItem('todos');
  return todoListFromLs ? JSON.parse(todoListFromLs) : [];
};

export const saveTodoListToLs = (todos: ITodo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const initialState: TodoReducerType = {
  todos: getTodoListFromLs(),
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        state.todos.push(action.payload);
        saveTodoListToLs(state.todos);
        return state;
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidV1(),
          description,
          isCompleted: false,
        } as ITodo,
      }),
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const updatedTodos = state.todos.filter((item) => item.id !== action.payload);
      saveTodoListToLs(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex((s) => s.id === action.payload.id);
      state.todos[index].description = action.payload.description;
      saveTodoListToLs(state.todos);
    },
    changeTodoStatus: (state, action: PayloadAction<Omit<ITodo, 'description'>>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index].isCompleted = action.payload.isCompleted;
      saveTodoListToLs(state.todos); // Save updated todos to localStorage
    },
  },
});

export const { addTodo, removeTodo, updateTodo, changeTodoStatus } = TodoSlice.actions;

export const todosReducer = TodoSlice.reducer;
