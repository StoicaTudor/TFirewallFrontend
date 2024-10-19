import {Injectable} from '@angular/core'
import {AbstractUrlComposerService} from "./abstract-url-composer.service";
import {
  UserProfileCreationResponseDto,
  userProfileCreationResponseDtoToUserProfile,
  UserProfileDeletionRequestDto
} from "../../entities/dtos/user-dtos";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {JsonValidationRequestDto, JsonValidationResponseDto} from "../../entities/dtos/utilities-dtos";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesApiUrlComposerService extends AbstractUrlComposerService {
  getEndpointsRoot(): string {
    return "utilities"
  }

  isJsonValid(): string {
    return `${this.createRootUrl()}/validate-json`
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class UtilitiesApiUrlComposerService {
//   constructor(
//     private http: HttpClient,
//     private urlComposer: UtilitiesApiUrlComposerService) {
//   }
//
//   isJsonValid(dto: JsonValidationRequestDto): Observable<JsonValidationResponseDto> {
//     return this.http.post<UserProfileCreationResponseDto>(this.urlComposer.createUserProfileUrl(), dto).pipe(
//       map(dto => userProfileCreationResponseDtoToUserProfile(dto))
//     )
//   }
// }
