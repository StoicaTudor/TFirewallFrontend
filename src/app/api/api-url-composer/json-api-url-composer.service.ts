import {Injectable} from '@angular/core'
import {AbstractUrlComposerService} from "./abstract-url-composer.service";

@Injectable({
  providedIn: 'root'
})
export class JsonApiUrlComposerService extends AbstractUrlComposerService {
  getEndpointsRoot(): string {
    return "json"
  }

  isJsonValid(): string {
    return `${this.createRootUrl()}/validate-json`
  }

  loadUserProfileSettings(): string {
    return `${this.createRootUrl()}/load-user-profile-settings`
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class jsonApiUrlComposerService {
//   constructor(
//     private http: HttpClient,
//     private urlComposer: jsonApiUrlComposerService) {
//   }
//
//   isJsonValid(dto: JsonValidationRequestDto): Observable<JsonValidationResponseDto> {
//     return this.http.post<UserProfileCreationResponseDto>(this.urlComposer.createUserProfileUrl(), dto).pipe(
//       map(dto => userProfileCreationResponseDtoToUserProfile(dto))
//     )
//   }
// }
