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
import {UtilitiesApiUrlComposerService} from "../api-url-composer/utilities-api-url-composer.service";
import {JsonValidationRequestDto, JsonValidationResponseDto} from "../../entities/dtos/utilities-dtos";

@Injectable({
  providedIn: 'root',
})
export class UtilitiesApiDispatcher {
  constructor(
    private http: HttpClient,
    private urlComposer: UtilitiesApiUrlComposerService) {
  }

  isJsonValid(dto: JsonValidationRequestDto): Observable<JsonValidationResponseDto> {
    return this.http.post<JsonValidationResponseDto>(this.urlComposer.isJsonValid(), dto).pipe()
  }
}

/*
@Injectable({
  providedIn: 'root'
})
export class UtilitiesApiUrlComposerService {
  constructor(
    private http: HttpClient,
    private urlComposer: UtilitiesApiUrlComposerService) {
  }

  isJsonValid(dto: JsonValidationRequestDto): Observable<JsonValidationResponseDto> {
    return this.http.post<UserProfileCreationResponseDto>(this.urlComposer.createUserProfileUrl(), dto).pipe(
      map(dto => userProfileCreationResponseDtoToUserProfile(dto))
    )
  }
}
 */
