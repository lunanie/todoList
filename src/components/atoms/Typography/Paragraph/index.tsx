import React from 'react';
import { Paragraph } from './style';
import { IParagraphProps } from './type';

const Text: React.FC<IParagraphProps> = ({ children, ...props }) => {
  return <Paragraph {...props}>{children}</Paragraph>;
};

export default Text;
