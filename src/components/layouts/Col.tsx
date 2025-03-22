import { system, SystemProps } from '@/theme';
import { Col as BsCol } from 'react-bootstrap';
import styled from 'styled-components';

const Col = styled(BsCol)<SystemProps>`
  ${system}
`;

export default Col;
