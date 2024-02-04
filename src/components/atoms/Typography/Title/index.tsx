import React from 'react';
import { Typography } from 'antd';
import { ITitleProps } from './type';

const { Title } = Typography;

const TitleComponent: React.FC<ITitleProps> = ({ level = 1, children, ...props }) => {
  return (
    <Title level={level} {...props}>
      {children}
    </Title>
  );
};

export default TitleComponent;
