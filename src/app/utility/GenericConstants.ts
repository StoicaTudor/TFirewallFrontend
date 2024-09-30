export enum InjectableScopes {
  Root = 'root',
  Any = 'any',
  Platform = 'platform',
  PlatformBrowser = 'platform-browser',
  PlatformServer = 'platform-server',
}

export enum ResponseTypes {
  Json = 'json',
  Text = 'text',
  Blob = 'blob',
  ArrayBuffer = 'arraybuffer',
}

export enum Observe {
  Body = 'body ',
  Events = 'events',
  Response = 'response',
}

export const PING_REPEAT_TIME_MS: number = 5000
export const AppRootSelector = "app-root"
