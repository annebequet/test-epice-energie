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
        dark:bg-gray-700
        flex
        flex-col
      `}
    >
      <select
        className="py-2 p-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer"
        onChange={handleChange}
        value={menuSelected}
      >
        {dropdownMenu.map((menu: MenuType) => (
          <option
            key={menu.id}
            value={menu.id}
            className="
              block
              px-4
              py-2
              hover:bg-gray-100
              dark:hover:bg-gray-600
              dark:hover:text-white
              cursor-pointer
            "
          >
            {menu.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
