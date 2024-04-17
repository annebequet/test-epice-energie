import React from 'react';

import { DropdownType, MenuType } from './types';

const Dropdown: React.FC<DropdownType> = (props) => {
  const { dropdownMenu, handleChange, menuSelected } = props

  return (
    <div
      className={`
        bg-white
        divide-y
        divide-gray-100
        rounded-lg
        shadow
        w-44
        flex
        flex-col
        mb-3
      `}
    >
      <select
        className="py-2 p-2 text-sm text-custom-gray cursor-pointer bg-white"
        onChange={handleChange}
        value={menuSelected}
      >
        {dropdownMenu && dropdownMenu.map((menu: MenuType) => (
          <option
            key={menu.id}
            value={menu.id}
            className="
              block
              px-4
              py-2
              cursor-pointer
            "
          >
            {menu.label}
          </option>
        ))}
        {!dropdownMenu && (
          <option
            className="
              block
              px-4
              py-2
              cursor-pointer
            "
          >
            Pas de site
          </option>
        )}
      </select>
    </div>
  )
}

export default Dropdown
