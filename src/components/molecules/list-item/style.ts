import { Col, ColProps, Row } from 'antd';
import styled from 'styled-components';

export const Container = styled('div')(
  () => ({
    maxWidth: 700,
  }),
  { name: 'Container' },
);

export const CustomRow = styled(Row)(
  () => ({
    minWidth: 400,
    flexWrap: 'nowrap',
  }),
  { name: 'CustomRow' },
);

export const Title: React.FC<ColProps> = styled(Col)(
  () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }),
  { name: 'Title' },
);

export const Icon: React.FC<ColProps> = styled(Col)(() => ({}), {
  name: 'Title',
});
