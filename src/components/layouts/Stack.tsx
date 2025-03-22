import { system, SystemProps } from '@/theme';
import styled from 'styled-components';

const Stack = styled.div<SystemProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
  ${system}
`;

export default Stack;
