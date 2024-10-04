export interface FirewallLog {
  timestamp: string
  severity: string
  message: string
  userProfileId: string
}

export enum LogSeverity {
  Info = "Info",
  Warning = "Warning",
  Error = "Error"
}
