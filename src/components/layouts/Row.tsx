import { system, SystemProps } from '@/theme';
import { Row as BsRow } from 'react-bootstrap';
import styled from 'styled-components';

const Row = styled(BsRow)<SystemProps>`
  ${system}
`;

export default Row;
