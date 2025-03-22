import { ReactNode } from 'react';
import { MenuButton, MenuItem, MenuList } from './Menu.styled';
import { SystemProps } from '@/theme';

export interface MenuProps extends SystemProps {
  controlLabel: string | ReactNode;
  options: Array<{ label: string | ReactNode; id: string }>;
  optionActive?: number;
}

function Menu({ options, controlLabel, optionActive, ...props }: MenuProps) {
  return (
    <MenuButton {...props}>
      {controlLabel}
      {options.length > 0 && (
        <MenuList>
          {options.map((opt, i) => (
            <MenuItem key={opt.id} active={optionActive === i}>
              {opt.label}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </MenuButton>
  );
}

export default Menu;
