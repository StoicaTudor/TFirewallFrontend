import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from "../../../environments/environment"
import {User} from "../../entities/user"
import {UserCreationRequestDto} from "../../entities/dtos/user-dtos"
import {AbstractUrlComposerService} from "./abstract-url-composer.service"
import {InjectableScopes} from "../../utility/GenericConstants";

@Injectable({
  providedIn: InjectableScopes.Root
})
export class HealthcheckApiUrlComposerService extends AbstractUrlComposerService {
  getEndpointsRoot(): string {
    return "healthcheck"
  }

  isServerUpUrl(): string {
    return `${this.createRootUrl()}/is-up`
  }
}
