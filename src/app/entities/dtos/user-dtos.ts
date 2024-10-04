import {User, UserProfile, UserRole} from "../user"
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

export interface UserProfileFetchResponseDto {
  id: string,
  userID: string,
  content: string
  name: string,
}

export interface UserProfileCreationRequestDto {
  name: string,
  userId: string,
  content: string
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
  id: string
  email: string
  password: string
  role: string,
  userProfiles: UserProfileFetchResponseDto[]
}

export function userFetchResponseToUser(dto: UserFetchResponseDto): User {
  return <User>{
    id: dto.id,
    email: dto.email,
    password: dto.password,
    role: stringToEnum(UserRole, dto.role),
    profiles: dto.userProfiles.map(profile => userProfileFetchResponseDtoToUserProfile(profile))
  }
}

export function userToUserCreationRequestDTO(dto: User): UserCreationRequestDto {
  return {
    email: dto.email,
    password: dto.password, // Assuming you're handling passwords safely
    role: dto.role,
  }
}

export function userProfileFetchResponseDtoToUserProfile(dto: UserProfileFetchResponseDto): UserProfile {
  return {
    id: dto.id,
    userID: dto.userID,
    content: dto.content,
    name: dto.name,
  }
}
