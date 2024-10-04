import {Component, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FirewallLog} from "../entities/firewall-log";
import {LogsApiDispatcher} from "../api/api-dispatcher/logs-api-dispatcher.service"; // Import CommonModule for common Angular directives

@Component({
  selector: 'firewall-logs',
  templateUrl: './firewall-logs.component.html',
  standalone: true,
  styleUrls: ['./firewall-logs.component.css'],
  imports: [CommonModule]
})
export class FirewallLogsComponent implements OnInit {
  logs: FirewallLog[] = []

  constructor(private logsApiDispatcher: LogsApiDispatcher) {
  }

  ngOnInit(): void {
    this.loadLogs()
  }

  loadLogs() {
    this.logsApiDispatcher.getAllLogs().subscribe(logs => this.logs = logs)
  }
}
