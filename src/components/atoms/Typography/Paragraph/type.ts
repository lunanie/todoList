import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import { ReactNode } from 'react';

export interface IParagraphProps extends ParagraphProps {
  children: ReactNode;
}
