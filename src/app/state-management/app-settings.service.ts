import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'
import {InjectableScopes} from "../utility/GenericConstants"

@Injectable({
  providedIn: InjectableScopes.Root
})
export class AppSettingsService {
  private deleteProfileOnRightClick: boolean = true

  setDeleteProfileOnRightClick(value: boolean): void {
    this.deleteProfileOnRightClick = value
  }

  deleteProfileOnRightClickIsEnabled(): boolean {
    return this.deleteProfileOnRightClick
  }

  deleteProfileOnRightClickIsNotEnabled(): boolean {
    return !this.deleteProfileOnRightClickIsEnabled()
  }
}
