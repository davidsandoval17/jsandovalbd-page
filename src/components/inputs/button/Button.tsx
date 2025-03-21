import { darken, lighten } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { Color } from '@/theme/styled';
import { system, SystemProps } from '@/theme';

export type VariantButton = 'contained' | 'outlined' | 'text';

export type SizeButton = 'sm' | 'md' | 'lg';

export interface ButtonStyledProps extends SystemProps {
  variant?: VariantButton;
  size?: SizeButton;
  $color?: Color;
  fullWidth?: boolean;
}

const variantStyles = ({
  theme,
  variant = 'text',
  color = 'primary',
}: {
  theme: DefaultTheme;
  variant?: VariantButton;
  color?: Color;
}) =>
  ({
    contained: css`
      background: ${theme.colors[color]};
      color: white;

      &:hover {
        background: ${darken(0.07, theme.colors[color])};
        color: white;
      }

      &:active {
        background: ${darken(0.3, theme.colors[color])};
      }
    `,
    outlined: css`
      border: 1px solid ${theme.colors[color]};
      background: transparent;
      color: ${theme.colors[color]};

      &:hover {
        background: ${theme.colors[color]};
        color: white;
      }

      &:active {
        background: ${lighten(0.1, theme.colors[color])};
      }
    `,
    text: css`
      background: transparent;
      color: ${theme.colors[color]};

      &:hover {
        background: ${lighten(0.3, theme.colors[color])};
      }

      &:active {
        background: ${lighten(0.27, theme.colors[color])};
      }
    `,
  })[variant];

const sizeStyles = ({ size = 'md' }: { size?: SizeButton }) =>
  ({
    sm: css`
      height: 2.25rem;
      padding-inline: 1rem;
      line-height: 1.75rem;
      font-size: 12px;
      gap: 0.25rem;

      & > svg {
        font-size: 16px;
      }
    `,
    md: css`
      height: 2.75rem;
      padding-inline: 1.25rem;
      line-height: 2.75rem;
      font-size: 14px;
      gap: 0.5rem;

      & > svg {
        font-size: 18px;
      }
    `,
    lg: css`
      height: 3.25rem;
      padding-inline: 1.5rem;
      line-height: 3.25rem;
      font-size: 18px;
      gap: 0.5rem;

      & > svg {
        font-size: 20px;
      }
    `,
  })[size];

const Button = styled.button<ButtonStyledProps>`
  border-style: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  border-radius: 40px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.75;
    pointer-events: none;
  }

  ${({ theme, $color, variant }) =>
    variantStyles({ theme, variant, color: $color })}

  ${({ size }) => sizeStyles({ size })}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: flex;
      width: 100%;
    `}

  ${system}
`;

Button.defaultProps = {
  size: 'md',
};

export default Button;
