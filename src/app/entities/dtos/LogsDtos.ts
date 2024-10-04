import {FirewallLog} from "../firewall-log";

export interface LogsFetchResponseDto {
  message: string
  userProfileId: string
  severity: string
  timestamp: string
}

export function logsFetchResponseToLog(dto: LogsFetchResponseDto): FirewallLog {
  return <FirewallLog>{
    severity: dto.severity,
    timestamp: dto.timestamp,
    message: dto.message,
    userProfileId: dto.userProfileId,
  }
}
