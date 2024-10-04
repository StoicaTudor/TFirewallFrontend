import {Component, OnDestroy, OnInit} from '@angular/core'
import {RouterLink, RouterOutlet} from '@angular/router'
import {AsyncPipe, NgForOf, NgIf} from '@angular/common'
import {Observable} from 'rxjs'
import {UsersTableComponent} from './users-table/users-table.component' // Adjust the path
import {FirewallLogsComponent} from './firewall-logs/firewall-logs.component'
import {Paths} from "./routing/RoutingConstants";
import {ServerPingService} from "./cross-cutting/server-ping.service";
import {AppRootSelector} from "./utility/GenericConstants";
import {ServerStatusService} from "./state-management/server-status.service";
import {RequestLoadingService} from "./state-management/request-loading.service";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {CreateUserProfileModalComponent} from "./create-user-profile-modal/create-user-profile-modal.component"; // Adjust the path

@Component({
  selector: AppRootSelector,
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    AsyncPipe,
    UsersTableComponent,
    RouterLink,
    FirewallLogsComponent,
    NgForOf,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent implements OnInit, OnDestroy {
  Paths = Paths
  title = 'Firewall settings'
  serverStatusIsUp$: Observable<boolean>
  ping$: Observable<boolean>
  isLoading$: Observable<boolean>

  constructor(
    private serverPingService: ServerPingService,
    private serverStatusService: ServerStatusService,
    private requestLoadingService: RequestLoadingService,
    public dialog: MatDialog) {
    this.ping$ = this.serverPingService.getPing()
    this.serverStatusIsUp$ = this.serverStatusService.getServerStatus$();
    this.isLoading$ = this.requestLoadingService.getLoadingStatus$();
  }

  ngOnInit(): void {
    this.ping$.subscribe()
    this.serverStatusIsUp$.subscribe()
    this.isLoading$.subscribe()
  }

  ngOnDestroy(): void {
  }
}
