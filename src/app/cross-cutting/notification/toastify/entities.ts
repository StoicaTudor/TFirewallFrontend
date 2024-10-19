export enum ToastifyPosition {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
}

export enum ToastifyTransition {
  Bounce = 'bounce',
  Slide = 'slide',
  Zoom = 'zoom',
  Flip = 'flip',
}

export enum ToastifyIconLibrary {
  Material = 'material',
  FontAwesome = 'font-awesome',
  None = 'none',
}

export enum ToastifyNotificationSeverity {
  Info,
  Error,
  Default,
  Warn,
  Success
}

export interface ToastifyOptions {
  message: string,
  severity: ToastifyNotificationSeverity
  position: ToastifyPosition
  transition: ToastifyTransition
  autoClose: number
  autoCloseSuccess: number
  autoCloseInfo: number
  autoCloseWarn: number
  autoCloseError: number
  hideProgressBar: boolean
  newestOnTop: boolean
  closeOnClick: boolean
  pauseOnHover: boolean
  pauseOnVisibilityChange: boolean
  iconLibrary: ToastifyIconLibrary
}
