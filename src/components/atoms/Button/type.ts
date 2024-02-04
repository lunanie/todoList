import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button/button';

export interface IButtonProps extends ButtonProps {
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  children: ReactNode;
}
