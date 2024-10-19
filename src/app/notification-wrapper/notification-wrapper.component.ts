import {Component, OnInit} from '@angular/core'
import {AngularToastifyModule} from "angular-toastify"
import {switchMap} from "rxjs"
import {NotificationService} from "../cross-cutting/notification/notification.service"
import {ToastifyBuilder} from "../cross-cutting/notification/toastify/toastify-properties-builder";
import {ToastifyOptions} from "../cross-cutting/notification/toastify/entities";

@Component({
  selector: 'notification-wrapper',
  standalone: true,
  imports: [
    AngularToastifyModule
  ],
  templateUrl: './notification-wrapper.component.html',
  styleUrl: './notification-wrapper.component.css'
})
export class NotificationWrapperComponent implements OnInit {
  options: ToastifyOptions

  constructor(private notificationService: NotificationService) {
    this.options = ToastifyBuilder.getDefaultConfig()
  }

  ngOnInit(): void {
    this.notificationService.notifications$
      .pipe(switchMap(config => this.showNotification(config)))
      .subscribe()
  }

  private showNotification(config: ToastifyOptions): Promise<void> {
    this.options = config

    return new Promise<void>((resolve) => {
      this.notificationService.showNotification(this.options)

      setTimeout(() => {
        resolve()
      }, this.options.autoClose || 1000)
    })
  }
}
