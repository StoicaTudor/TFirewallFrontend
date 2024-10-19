import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import {LogsApiUrlComposerService} from "../api-url-composer/logs-api-url-composer.service";
import {LogsFetchResponseDto, logsFetchResponseToLog} from "../../entities/dtos/LogsDtos";
import {FirewallLog} from "../../entities/firewall-log";

@Injectable({
  providedIn: 'root',
})
export class LogsApiDispatcher {
  constructor(
    private http: HttpClient,
    private urlComposer: LogsApiUrlComposerService) {
  }

  getAllLogs(): Observable<FirewallLog[]> {
    return this.http.get<LogsFetchResponseDto[]>(this.urlComposer.getAllLogsUrl())
      .pipe(
        map(dtoList => dtoList.map(logsFetchDto => logsFetchResponseToLog(logsFetchDto)))
      )
  }
}
