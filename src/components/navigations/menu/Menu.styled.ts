import { SHADOW, system, SystemProps, TRANSITIONS } from '@/theme';
import styled, { css } from 'styled-components';

export const MenuList = styled.ul`
  position: absolute;
  top: 150%;
  right: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: ${SHADOW.xl};
  z-index: 2;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  min-width: 130px;
  border-radius: 12px;
  opacity: 0;
  visibility: hidden;
  transition: ${TRANSITIONS.base};
`;

export const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.5rem 24px 0.5rem 12px;
  gap: 0.5rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.colors['background-1']};
    color: ${({ theme: { mode, colors } }) =>
      colors[mode === 'dark' ? 'white' : 'primary']};
  }

  ${({ active }) =>
    active &&
    css`
      font-weight: 600;
    `}
`;

export const MenuButton = styled.button<SystemProps>`
  background: transparent;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    ${MenuList} {
      opacity: 1;
      visibility: visible;
    }
  }

  ${system}
`;
