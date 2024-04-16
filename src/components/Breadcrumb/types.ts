export type BreadcrumbType = {
  label: string
  link?: string
  component?: JSX.Element
}

export type BreadcrumbPropsType = {
  breadcrumbs: BreadcrumbType[]
}
  
export type BreadcrumbLinkType = {
  label: string
  link: string
}