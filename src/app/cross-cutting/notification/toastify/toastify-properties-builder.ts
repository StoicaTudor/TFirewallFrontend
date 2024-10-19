import {
  ToastifyIconLibrary,
  ToastifyNotificationSeverity,
  ToastifyOptions,
  ToastifyPosition,
  ToastifyTransition
} from "./entities";

export class ToastifyBuilder {
  public static readonly defaultConfig: ToastifyOptions = {
    message: "va dau la muie la toti",
    severity: ToastifyNotificationSeverity.Default,
    position: ToastifyPosition.TopRight,
    transition: ToastifyTransition.Zoom,
    autoClose: 2000,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: true,
    pauseOnHover: true,
    pauseOnVisibilityChange: true,
    iconLibrary: ToastifyIconLibrary.Material,
    autoCloseError: 0,
    autoCloseInfo: 0,
    autoCloseSuccess: 0,
    autoCloseWarn: 0
  }

  private readonly options: ToastifyOptions

  constructor() {
    this.options = {...ToastifyBuilder.defaultConfig}
  }

  static getDefaultConfig(): ToastifyOptions {
    return new ToastifyBuilder().build()
  }

  setMessage(message: string): this {
    this.options.message = message
    return this
  }

  setSeverity(severity: ToastifyNotificationSeverity): this {
    this.options.severity = severity
    return this
  }

  setPosition(position: ToastifyPosition): this {
    this.options.position = position
    return this
  }

  setTransition(transition: ToastifyTransition): this {
    this.options.transition = transition
    return this
  }

  setAutoClose(time: number): this {
    this.options.autoClose = time
    return this
  }

  setAutoCloseSuccess(time: number): this {
    this.options.autoCloseSuccess = time
    return this
  }

  setAutoCloseInfo(time: number): this {
    this.options.autoCloseInfo = time
    return this
  }

  setAutoCloseWarn(time: number): this {
    this.options.autoCloseWarn = time
    return this
  }

  setAutoCloseError(time: number): this {
    this.options.autoCloseError = time
    return this
  }

  setHideProgressBar(hide: boolean): this {
    this.options.hideProgressBar = hide
    return this
  }

  setNewestOnTop(newest: boolean): this {
    this.options.newestOnTop = newest
    return this
  }

  setCloseOnClick(close: boolean): this {
    this.options.closeOnClick = close
    return this
  }

  setPauseOnHover(pause: boolean): this {
    this.options.pauseOnHover = pause
    return this
  }

  setPauseOnVisibilityChange(pause: boolean): this {
    this.options.pauseOnVisibilityChange = pause
    return this
  }

  setIconLibrary(iconLibrary: ToastifyIconLibrary): this {
    this.options.iconLibrary = iconLibrary
    return this
  }

  build(): ToastifyOptions {
    return this.options
  }
}
