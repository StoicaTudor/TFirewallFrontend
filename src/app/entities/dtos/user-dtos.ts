import {User, UserRole} from "../entities"
import {stringToEnum} from "../../state-management/utility";

export interface UserCreationRequestDto {
  email: string
  password: string
  role: UserRole
}

export interface UserUpdateRequestDto {
  id: string
  email: string
  password: string
  role: UserRole
}

export interface UserProfileCreationRequestDto {
}

export interface UserProfileCreationResponseDto {
}

export interface UserProfileUpdateRequestDto {
}

export interface UserCreationResponseDto {
  response: string
}

export interface UserUpdateResponseDto {
  response: string
}

export interface UserDeletionResponseDto {
  response: string
}

export interface UserFetchResponseDto {
  email: string
  password: string
  role: string
}

export function userFetchResponseToUser(dto: UserFetchResponseDto): User {
  return <User>{
    id: "",
    email: dto.email,
    password: dto.password, // Assuming you're handling passwords safely
    role: stringToEnum(UserRole, dto.role),
    profiles: []
  }
}

export function userToUserCreationRequestDTO(dto: User): UserCreationRequestDto {
  return {
    email: dto.email,
    password: dto.password, // Assuming you're handling passwords safely
    role: dto.role,
  }
}
