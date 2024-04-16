export type MenuType = {
  id: string
  label: string
}
  
export type DropdownType = {
  dropdownMenu: MenuType[]
  menuSelected: string
  handleChange: React.ChangeEventHandler<HTMLSelectElement>
}