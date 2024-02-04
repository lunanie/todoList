import { ITodo } from '@store/constants';

export interface IListProps {
  data: ITodo[];
  onDeleteTask: (arg: string) => void;
  onEditTask: (item: ITodo) => void;
  onChangeStatus: (item: Omit<ITodo, 'description'>) => void;
}
