import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {JsonApiUrlComposerService} from "../api-url-composer/json-api-url-composer.service";
import {
  JsonValidationRequestDto,
  JsonValidationResponseDto,
  UserProfileJsonSettingsUploadRequestDto,
  UserProfileJsonSettingsUploadResponseDto
} from "../../entities/dtos/json-dtos";

@Injectable({
  providedIn: 'root',
})
export class JsonApiDispatcher {
  constructor(
    private http: HttpClient,
    private urlComposer: JsonApiUrlComposerService) {
  }

  isJsonValid(dto: JsonValidationRequestDto): Observable<JsonValidationResponseDto> {
    return this.http.post<JsonValidationResponseDto>(this.urlComposer.isJsonValid(), dto).pipe()
  }

  uploadJsonUserProfileContent(dto: UserProfileJsonSettingsUploadRequestDto): Observable<UserProfileJsonSettingsUploadResponseDto> {
    return this.http.post<UserProfileJsonSettingsUploadResponseDto>(this.urlComposer.loadUserProfileSettings(), dto).pipe()
  }
}
