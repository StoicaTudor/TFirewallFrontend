import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'
import {InjectableScopes} from "../utility/GenericConstants"

@Injectable({
  providedIn: InjectableScopes.Root
})
export class ServerStatusService {
  private _serverUpSubject = new BehaviorSubject<boolean>(false)

  setServerStatus(isUp: boolean): void {
    this._serverUpSubject.next(isUp)
  }

  getServerStatus$(): Observable<boolean> {
    return this._serverUpSubject.asObservable()
  }
}
