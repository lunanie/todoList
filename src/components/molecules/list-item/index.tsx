import React, { useState } from 'react';
import { Col } from 'antd';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { Container, CustomRow, Icon, Title } from './style';
import { IListItemProps } from './type';

import CheckboxComponents from '@components/atoms/Checkbox';
import TextareaComponents from '@components/atoms/Textarea';
import Text from '@components/atoms/Typography/Paragraph';
import IconButtonComponents from '@components/atoms/IconButton';

const ListItem: React.FC<IListItemProps> = ({ item, onDelete, onEdit, onChange }) => {
  const [text, setText] = useState<string>(item.description);

  return (
    <>
      <Container>
        <CustomRow justify={'space-between'}>
          <Col span={1}>
            <CheckboxComponents
              defaultChecked={item?.isCompleted}
              onClick={() =>
                onChange({
                  id: item?.id,
                  isCompleted: !item?.isCompleted,
                })
              }
            />
          </Col>
          <Title span={10}>
            <TextareaComponents
              defaultValue={item?.description}
              autoSize
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setText(event.target?.value)}
            />
          </Title>
          <Col span={5}>
            <Text>{new Date().toLocaleDateString()}</Text>
          </Col>
          <Icon span={2}>
            <IconButtonComponents
              icon={<EditOutlined />}
              onClick={() =>
                onEdit({
                  id: item?.id,
                  description: text,
                  isCompleted: item?.isCompleted,
                })
              }
            />
          </Icon>
          <Icon span={2}>
            <IconButtonComponents icon={<DeleteOutlined />} danger onClick={() => onDelete(item?.id)} />
          </Icon>
        </CustomRow>
      </Container>
    </>
  );
};

export default ListItem;
