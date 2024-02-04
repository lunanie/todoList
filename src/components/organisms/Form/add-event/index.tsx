import React from 'react';
import { Col, Form, Input, Row } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import { IAddEventProps } from './type';

import IconButtonComponents from '@components/atoms/IconButton';

const AddEventForm: React.FC<IAddEventProps> = ({ onFinish }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: Record<string, string>) => {
    onFinish(values);
    form.resetFields();
  };

  return (
    <>
      <Form form={form} name="basic" onFinish={handleFinish} autoComplete="off" style={{ width: 400 }}>
        <Row justify="space-between">
          <Col span={18}>
            <Form.Item name="value" rules={[{ required: true, message: 'Please input your task!' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={1}>
            <Form.Item>
              <IconButtonComponents icon={<PlusOutlined />} htmlType="submit" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddEventForm;
