import type { JSX } from "react"

export type User = {
  username: string
  email: string
  password: string
}

export type Link = {
  label: string
  href: string
}

export type TagType = {
  id: string
  external_id?: string
  tag: string
}

export type Resource = {
  tags: string[]
  author: string
  name: string
  appliedTags: string[]
  url: string
  createdAt: string
  id: string
  avg_rating?: number
}

export type ResourcesArray = Resource[]

export type ResultsProps = {
  resources: Resource[]
  savedResources?: string[]
  setSavedResources?: React.Dispatch<React.SetStateAction<string[]>>
  allTags: TagType[]
}

export type Inputs = {
  search: string
}

export interface CardComponentProps {
  name: string
  author: string
  url: string
  date: string
  appliedTagsIds: string[]
  allTags: TagType[]
  id: string
  savedResources?: string[]
  setSavedResources?: React.Dispatch<React.SetStateAction<string[]>>
  avgRating?: number
}

export type IconButtonProps = {
  icon: JSX.Element
  className?: string
  handleClick: () => void
  children?: JSX.Element
}

export type SearchTagProps = {
  label: string
  onClick: () => void
  selected?: boolean
  className?: string
}

export type TextLinkProps = {
  label: string
  href: string
  className?: string
}

export type ButtonProps = {
  type?: "button" | "submit"
  className?: string
  name: string | JSX.Element
  onClick?: () => void
}

export type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export type SearchFormProps = {
  handleSearch: (search: string) => void
  handleReset: () => void
}

export type ErrorProps = {
  error: string
}

export type SignupFormInputs = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export type SignupFormProps = {
  handleSetUser: (user: User) => void
}

export type LoginFormInputs = {
  email: string
  password: string
}

export type LoginPageProps = {
  page: string
}
