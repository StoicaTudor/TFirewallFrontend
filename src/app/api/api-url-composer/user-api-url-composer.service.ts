import {Injectable} from '@angular/core'
import {AbstractUrlComposerService} from "./abstract-url-composer.service";
import {UserProfileDeletionRequestDto} from "../../entities/dtos/user-dtos";

@Injectable({
  providedIn: 'root'
})
export class UserApiUrlComposerService extends AbstractUrlComposerService {
  getEndpointsRoot(): string {
    return "users"
  }

  getAllUsersUrl(): string {
    return `${this.createRootUrl()}/all`
  }

  getUsersByIDUrl(id: string): string {
    return `${this.createRootUrl()}/${id}`
  }

  createUserUrl(): string {
    return `${this.createRootUrl()}/create`
  }

  updateUserUrl(): string {
    return `${this.createRootUrl()}/update`
  }

  deleteUserByIDUrl(id: string): string {
    return `${this.createRootUrl()}/delete/${id}`
  }

  deleteAllUsersUrl(): string {
    return `${this.createRootUrl()}/delete-all`
  }

  createUserProfileUrl(): string {
    return `${this.createRootUrl()}/create-profile`
  }

  updateUserProfileUrl(): string {
    return `${this.createRootUrl()}/update-profile`
  }

  deleteUserProfileUrl(dto: UserProfileDeletionRequestDto): string {
    return `${this.createRootUrl()}/delete-profile/${dto.id}`
  }
}
