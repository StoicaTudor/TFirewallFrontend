import {environment} from "../../../environments/environment"

export abstract class AbstractUrlComposerService {
  private apiRoot = environment.apiRoot

  createRootUrl(): string {
    return `${this.apiRoot}/${this.getEndpointsRoot()}`
  }

  protected abstract getEndpointsRoot(): string
}
