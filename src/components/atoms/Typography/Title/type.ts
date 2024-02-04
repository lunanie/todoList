import { TitleProps } from 'antd/lib/typography/Title';
import { ReactNode } from 'react';

export interface ITitleProps extends TitleProps {
  level?: 1 | 5 | 2 | 3 | 4 | undefined;
  children: ReactNode;
}
