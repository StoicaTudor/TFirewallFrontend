import {Injectable} from '@angular/core'
import {AbstractUrlComposerService} from "./abstract-url-composer.service";

@Injectable({
  providedIn: 'root'
})
export class LogsApiUrlComposerService extends AbstractUrlComposerService {
  getEndpointsRoot(): string {
    return "logs"
  }

  getAllLogsUrl(): string {
    return `${this.createRootUrl()}/all`
  }

  getAllLogsOfUserProfileUrl(userProfileId: string): string {
    return `${this.createRootUrl()}/all/${userProfileId}`
  }
}
