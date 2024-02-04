import React from 'react';
import { Button } from 'antd';

import { IButtonProps } from './type';

const ButtonComponents: React.FC<IButtonProps> = ({ children, type = 'default', ...props }) => (
  <Button type={type} {...props}>
    {children}
  </Button>
);

export default ButtonComponents;
