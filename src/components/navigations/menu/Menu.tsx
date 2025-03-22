import { ReactNode } from 'react';
import { MenuButton, MenuItem, MenuList } from './Menu.styled';
import { SystemProps } from '@/theme';

export interface MenuProps extends SystemProps {
  controlLabel: string | ReactNode;
  options: Array<{
    label: string | ReactNode;
    id: string;
    onSelect?: () => void;
  }>;
  optionActive?: string;
}

function Menu({ options, controlLabel, optionActive, ...props }: MenuProps) {
  return (
    <MenuButton {...props}>
      {controlLabel}
      {options.length > 0 && (
        <MenuList>
          {options.map(opt => (
            <MenuItem
              key={opt.id}
              active={optionActive === opt.id}
              onClick={opt.onSelect}
            >
              {opt.label}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </MenuButton>
  );
}

export default Menu;
