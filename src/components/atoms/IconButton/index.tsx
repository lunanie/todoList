import React from 'react';
import { Button } from 'antd';

import { IIconButtonProps } from './type';

const IconButtonComponents: React.FC<IIconButtonProps> = ({ icon, type = 'default', ...props }) => (
  <Button type={type} {...props} icon={icon} />
);

export default IconButtonComponents;
