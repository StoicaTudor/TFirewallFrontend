import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import {User} from "../../entities/user"
import {UserApiUrlComposerService} from "../api-url-composer/user-api-url-composer.service"
import {
  UserCreationResponseDto,
  UserCreationRequestDto,
  UserDeletionResponseDto,
  UserFetchResponseDto,
  userFetchResponseToUser,
  UserUpdateResponseDto,
  UserProfileCreationRequestDto,
  UserProfileCreationResponseDto,
  UserProfileUpdateRequestDto,
  UserProfileUpdateResponseDto,
  userProfileUpdateResponseDtoToUserProfile,
  userProfileCreationResponseDtoToUserProfile, UserProfileDeletionRequestDto, UserProfileDeletionResponseDto
} from "../../entities/dtos/user-dtos"

@Injectable({
  providedIn: 'root',
})
export class UserApiDispatcher {
  constructor(
    private http: HttpClient,
    private urlComposer: UserApiUrlComposerService) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<UserFetchResponseDto[]>(this.urlComposer.getAllUsersUrl())
      .pipe(
        map(dtoList => dtoList.map(userFetchDto => userFetchResponseToUser(userFetchDto)))
      )
  }

  getUsersByID(id: string): Observable<User> {
    return this.http.get<UserFetchResponseDto>(`${this.urlComposer.getAllUsersUrl()}/${id}`)
      .pipe(
        map(dto => userFetchResponseToUser(dto))
      )
  }

  createUserUrl(dto: UserCreationRequestDto): Observable<UserCreationResponseDto> {
    return this.http.post<UserCreationResponseDto>(this.urlComposer.createUserUrl(), dto).pipe()
  }

  updateUserUrl(dto: UserCreationRequestDto): Observable<UserUpdateResponseDto> {
    return this.http.put<UserUpdateResponseDto>(this.urlComposer.updateUserUrl(), dto)
  }

  deleteUserByID(id: string): Observable<UserDeletionResponseDto> {
    return this.http.delete<UserDeletionResponseDto>(this.urlComposer.deleteUserByIDUrl(id))
  }

  deleteAllUsers(): Observable<UserDeletionResponseDto> {
    return this.http.delete<UserDeletionResponseDto>(this.urlComposer.deleteAllUsersUrl())
  }

  createUserProfile(dto: UserProfileCreationRequestDto): Observable<UserProfileCreationResponseDto> {
    return this.http.post<UserProfileCreationResponseDto>(this.urlComposer.createUserProfileUrl(), dto).pipe(
      map(dto => userProfileCreationResponseDtoToUserProfile(dto))
    )
  }

  updateUserProfile(dto: UserProfileUpdateRequestDto): Observable<UserProfileUpdateResponseDto> {
    return this.http.put<UserProfileUpdateResponseDto>(this.urlComposer.updateUserProfileUrl(), dto).pipe(
      map(dto => userProfileUpdateResponseDtoToUserProfile(dto))
    )
  }

  deleteUserProfile(dto: UserProfileDeletionRequestDto): Observable<UserProfileDeletionResponseDto> {
    return this.http.delete<UserProfileDeletionRequestDto>(this.urlComposer.deleteUserProfileUrl(dto))
  }
}
