import {Injectable} from '@angular/core'
import {ToastService} from "angular-toastify"
import {Subject} from "rxjs"
import {ToastifyNotificationSeverity, ToastifyOptions} from "./toastify/entities";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private toastService: ToastService) {
    }

  private notificationSubject = new Subject<ToastifyOptions>()
  notifications$ = this.notificationSubject.asObservable()

  pushNotification(config: ToastifyOptions): void {
    this.notificationSubject.next(config)
  }

  showNotification(options: ToastifyOptions): void {
    switch (options.severity) {
      case ToastifyNotificationSeverity.Default:
        this.toastService.default(options.message)
        break

      case ToastifyNotificationSeverity.Info:
        this.toastService.info(options.message)
        break

      case ToastifyNotificationSeverity.Success:
        this.toastService.success(options.message)
        break

      case ToastifyNotificationSeverity.Warn:
        this.toastService.warn(options.message)
        break

      case ToastifyNotificationSeverity.Error:
        this.toastService.error(options.message)
        break
    }
  }
}
