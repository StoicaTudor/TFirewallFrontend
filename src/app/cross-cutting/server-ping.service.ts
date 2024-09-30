import {Injectable} from '@angular/core'
import {interval, map, Observable, startWith, switchMap, tap} from 'rxjs'
import {shareReplay} from 'rxjs/operators'
import {HealthCheckApiDispatcher} from "../api/api-dispatcher/health-check-api-dispatcher.service"
import {InjectableScopes, PING_REPEAT_TIME_MS} from "../utility/GenericConstants"
import {ServerStatusService} from "../state-management/server-status.service"
import {RequestLoadingService} from "../state-management/request-loading.service";

@Injectable({
  providedIn: InjectableScopes.Root
})
export class ServerPingService {
  private readonly ping$: Observable<boolean>

  constructor(
    healthcheckApiDispatcher: HealthCheckApiDispatcher,
    serverStatusService: ServerStatusService,
    requestLoadingService : RequestLoadingService) {
    this.ping$ = interval(PING_REPEAT_TIME_MS).pipe(
      startWith(true),
      tap(() => {
        requestLoadingService.setLoadingStatus(true)
      }),
      switchMap(() => healthcheckApiDispatcher.isServerUp()),
      tap(isServerUp => {
        serverStatusService.setServerStatus(isServerUp)
        requestLoadingService.setLoadingStatus(false)
      }),
      shareReplay(1)
    )
  }

  public getPing(): Observable<boolean> {
    return this.ping$
  }
}
