export type MenuType = {
  id: string,
  label: string,
}
  
export type DropdownType = {
  dropdownMenu: MenuType[] | undefined,
  menuSelected: string,
  handleChange: React.ChangeEventHandler<HTMLSelectElement>,
}