import { system, SystemProps } from '@/theme';
import { Container as BsContainer } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled(BsContainer).withConfig({
  attrs: [{ fluid: 'xl' }],
})<SystemProps>`
  ${system}
`;

export default Container;
