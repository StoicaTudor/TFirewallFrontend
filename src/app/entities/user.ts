export interface User {
  id: string
  email: string
  password: string
  role: UserRole
  profiles: UserProfile[]
}

export interface UserProfile {
  id: string
  userID: string
  content: string
  name: string
}

export function emptyUser(): User {
  return {
    role: UserRole.NonAdmin,
    profiles: [],
    email: '',
    password: '',
    id: ''
  }
}

export function userIsValid(user: User): boolean {
  return user.id !== null && user.email !== null && user.password !== null && user.role !== null
}

export enum UserRole {
  Admin = "Admin",
  NonAdmin = "NonAdmin",
}
