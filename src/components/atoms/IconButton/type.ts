import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button/button';

export interface IIconButtonProps extends ButtonProps {
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default' | undefined;
  icon: ReactNode;
}
