import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export const system = compose(
  typography,
  layout,
  space,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
);

export type SystemProps = LayoutProps &
  TypographyProps &
  SpaceProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps;
