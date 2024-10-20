export interface JsonValidationRequestDto {
  json: string
}

export interface JsonValidationResponseDto {
  isValid: boolean
}

export interface UserProfileJsonSettingsUploadRequestDto {
  isValid: boolean,
  userId: string,
  userProfileId: string,
  content: string
}

export interface UserProfileJsonSettingsUploadResponseDto {
  IsSuccessful: string,
}
