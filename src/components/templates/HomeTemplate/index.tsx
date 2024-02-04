import { Col, Row } from 'antd';
import React from 'react';

import { Container } from './style';
import { IHomeTemplateProps } from './type';

export const HomeTemplate: React.FC<IHomeTemplateProps> = ({ form, list }) => {
  return (
    <>
      <Container>
        <p>Enter your to-dos and click '+' to add them.</p>
        <Row>
          <Col>{form}</Col>
        </Row>
        <Row>
          <Col>{list}</Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeTemplate;
