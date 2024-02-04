import React from 'react';

import AddEventForm from '@components/organisms/Form/add-event';
import EventList from '@components/organisms/List';
import HomeTemplate from '@components/templates/HomeTemplate';
import { AppDispatch, RootState } from '@store/reducers';
import { addTodo, changeTodoStatus, removeTodo, updateTodo } from '@store/reducers/todo.slice';

import { useDispatch, useSelector } from 'react-redux';
import { ITodo } from '@store/constants';

const HomePage: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: Record<string, string>) => {
    dispatch(addTodo(values?.value));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleEditTask = (item: ITodo) => {
    dispatch(updateTodo(item));
  };

  const handleChangeStatus = (item: Omit<ITodo, 'description'>) => {
    dispatch(changeTodoStatus(item));
  };

  return (
    <HomeTemplate
      form={<AddEventForm onFinish={handleSubmit} />}
      list={
        <EventList
          data={todoList}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
          onChangeStatus={handleChangeStatus}
        />
      }
    />
  );
};

export default HomePage;
