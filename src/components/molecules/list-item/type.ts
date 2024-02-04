import { ITodo } from '@store/constants';

export interface IListItemProps {
  item: ITodo;
  onDelete: (arg: string) => void;
  onEdit: (item: ITodo) => void;
  onChange: (item: Omit<ITodo, 'description'>) => void;
}
