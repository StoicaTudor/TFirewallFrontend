import {User, UserProfile, UserRole} from "../user"
import {stringToEnum} from "../../utility/utility";

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
  userId: string,
  content: string
  name: string,
  isActiveProfile: boolean
}

export interface UserProfileCreationRequestDto {
  isActiveProfile: boolean,
  name: string,
  userId: string,
  content: string
}

export interface UserProfileUpdateRequestDto {
  isActiveProfile: boolean,
  name: string,
  id: string,
  userId: string,
  content: string,
}

export interface UserProfileDeletionRequestDto {
  id: string,
}

export interface UserProfileDeletionResponseDto {
}

export interface UserProfileUpdateResponseDto {
  id: string
  userId: string
  content: string
  name: string,
  isActiveProfile: boolean
}

export interface UserProfileCreationResponseDto {
  id: string
  userId: string
  content: string
  name: string,
  isActiveProfile: boolean
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
    userId: dto.userId,
    content: dto.content,
    name: dto.name,
    isActiveProfile: dto.isActiveProfile
  }
}

export function userProfileUpdateResponseDtoToUserProfile(dto: UserProfileUpdateResponseDto): UserProfile {
  return {
    id: dto.id,
    userId: dto.userId,
    content: dto.content,
    name: dto.name,
    isActiveProfile: dto.isActiveProfile
  }
}

export function userProfileCreationResponseDtoToUserProfile(dto: UserProfileCreationResponseDto): UserProfile {
  return {
    id: dto.id,
    userId: dto.userId,
    content: dto.content,
    name: dto.name,
    isActiveProfile: dto.isActiveProfile
  }
}
