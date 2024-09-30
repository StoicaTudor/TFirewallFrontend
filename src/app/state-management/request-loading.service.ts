import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'
import {InjectableScopes} from "../utility/GenericConstants"

@Injectable({
  providedIn: InjectableScopes.Root
})
export class RequestLoadingService {
  private _loadingSubject = new BehaviorSubject<boolean>(false)

  setLoadingStatus(isLoading: boolean): void {
    this._loadingSubject.next(isLoading)
  }

  getLoadingStatus$(): Observable<boolean> {
    return this._loadingSubject.asObservable()
  }
}
