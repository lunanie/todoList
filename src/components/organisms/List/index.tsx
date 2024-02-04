import React from 'react';

import Text from '@components/atoms/Typography/Paragraph';
import ListItem from '@components/molecules/list-item';

import { IListProps } from './type';
import { ITodo } from '@store/constants';

const EventList: React.FC<IListProps> = ({ data, onDeleteTask, onEditTask, onChangeStatus }) => {
  return (
    <>
      {data?.length > 0 ? (
        data?.map((item: ITodo) => (
          <ListItem key={item.id} item={item} onDelete={onDeleteTask} onEdit={onEditTask} onChange={onChangeStatus} />
        ))
      ) : (
        <Text>You don't have any tasks</Text>
      )}
    </>
  );
};

export default EventList;
