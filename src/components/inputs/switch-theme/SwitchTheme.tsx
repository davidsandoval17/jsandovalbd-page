import { BsFillMoonFill, BsFillSunFill } from '@/components';
import styled, { css } from 'styled-components';
import { system, SystemProps, TRANSITIONS, Z_INDEX_BUTTON } from '@/theme';
import { HtmlHTMLAttributes } from 'react';

export interface SwitchThemeStyledProps extends SystemProps {
  active?: boolean;
}

const Switch = styled.button<SwitchThemeStyledProps>`
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 22px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors['background-1']};
  ${system}
`;

const Toggle = styled.div<SwitchThemeStyledProps>`
  background: ${({ theme }) => theme.colors.body};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  transition: ${TRANSITIONS.base};

  ${({ active }) =>
    active &&
    css`
      margin-left: 17px;
    `}
`;

export interface SwitchThemeProps
  extends SwitchThemeStyledProps,
    HtmlHTMLAttributes<HTMLButtonElement> {}

const SwitchTheme = ({ active, onClick, ...props }: SwitchThemeProps) => {
  return (
    <Switch onClick={onClick} {...props}>
      <Toggle active={active}>
        {active ? <BsFillMoonFill /> : <BsFillSunFill />}
      </Toggle>
    </Switch>
  );
};

export default SwitchTheme;
