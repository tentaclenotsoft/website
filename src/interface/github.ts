export interface IOrganizationMember {
  id: number
  username: string
  url: string
  avatar_url: string
}

export interface IOrganizationRepository {
  id: number
  name: string
  url: string
  description: string
  language: string
  stars: number
  forks: number
}
