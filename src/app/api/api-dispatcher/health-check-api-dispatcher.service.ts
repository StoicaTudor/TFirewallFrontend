import {Injectable} from '@angular/core'
import {HttpClient, HttpResponse, HttpStatusCode} from '@angular/common/http'
import {catchError, map, Observable, of} from 'rxjs'
import {HealthcheckApiUrlComposerService} from "../api-url-composer/healthcheck-api-url-composer.service";
import {InjectableScopes, Observe, ResponseTypes} from "../../utility/GenericConstants";

interface ServerStatusResponse {
  headers: { [key: string]: string };
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: any;
}

@Injectable({
  providedIn: InjectableScopes.Root
})
export class HealthCheckApiDispatcher {
  constructor(
    private http: HttpClient,
    private urlComposer: HealthcheckApiUrlComposerService) {
  }

  // isServerUp(): Observable<string> {
  //   return this.http.get<string>(this.urlComposer.isServerUpUrl()).pipe()
  // }

  isServerUp(): Observable<boolean> {
    return this.http.get(this.urlComposer.isServerUpUrl(), {
      observe: Observe.Response,
      responseType: ResponseTypes.Text
    }).pipe(
      map((response: HttpResponse<string>) => response.status === HttpStatusCode.Ok),
      catchError(() => {
        return of(false)
      })
    );
  }
}
