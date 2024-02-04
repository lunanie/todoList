import { Typography } from 'antd';
import styled from 'styled-components';

export const Paragraph = styled(Typography.Paragraph)(
  () => ({
    display: 'inline-block',
  }),
  { name: 'Container' },
);
