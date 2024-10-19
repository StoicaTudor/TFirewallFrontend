import {Component, Inject} from '@angular/core'
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog"
import {MatFormField, MatLabel} from "@angular/material/form-field"
import {FormsModule} from "@angular/forms"
import {MatInput} from "@angular/material/input"
import {MatButton} from "@angular/material/button"
import {UserApiDispatcher} from "../api/api-dispatcher/user-api-dispatcher.service"
import {
  UserProfileCreationRequestDto,
  UserProfileCreationResponseDto, UserProfileDeletionRequestDto,
  UserProfileUpdateRequestDto, UserProfileUpdateResponseDto
} from "../entities/dtos/user-dtos"
import {MatCheckbox} from "@angular/material/checkbox";
import {isNullOrEmpty} from "../utility/utility";
import {UtilitiesApiDispatcher} from "../api/api-dispatcher/utilities-api-dispatcher.service";
import {JsonValidationRequestDto} from "../entities/dtos/utilities-dtos";

export enum UserProfileModalType {
  Create,
  Update
}

export interface UserProfileModalData {
  modalType: UserProfileModalType,
  data: CreateUserProfileModalData | UpdateUserProfileModalData
  postAction?: (data: UserProfileCreationResponseDto | UserProfileUpdateResponseDto | void) => void
}

export interface CreateUserProfileModalData {
  isChecked: boolean,
  content: string,
  name: string,
  userId: string,
}

export interface UpdateUserProfileModalData {
  isChecked: boolean,
  content: string,
  name: string,
  id: string,
  userId: string
}

@Component({
  selector: 'app-user-profile-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatLabel,
    MatFormField,
    FormsModule,
    MatInput,
    MatDialogTitle,
    MatButton,
    MatDialogActions,
    MatCheckbox
  ],
  templateUrl: './user-profile-modal.component.html',
  styleUrl: './user-profile-modal.component.css'
})
export class UserProfileModalComponent {
  modalData: UserProfileModalData

  constructor(
    public dialogRef: MatDialogRef<UserProfileModalComponent>,
    private userApiDispatcher: UserApiDispatcher,
    private utilitiesApiDispatcher: UtilitiesApiDispatcher,
    @Inject(MAT_DIALOG_DATA) data: UserProfileModalData) {
    this.modalData = data
  }

  onSave(): void {
    switch (this.modalData.modalType) {
      case UserProfileModalType.Create:
        this.onSaveCreateUserProfile()
        return

      case UserProfileModalType.Update:
        this.onSaveUpdateUserProfile()
        return
    }
  }

  onValidateJsonContentButtonPress(): void {
    const dto: JsonValidationRequestDto = {
      json: this.modalData.data.content
    }

    this.utilitiesApiDispatcher.isJsonValid(dto).subscribe(dto => dto.isValid)
  }

  onSaveCreateUserProfile(): void {
    const data: CreateUserProfileModalData = this.modalData.data as CreateUserProfileModalData

    const userProfileDto: UserProfileCreationRequestDto = {
      isActiveProfile: data.isChecked,
      content: data.content,
      userId: data.userId,
      name: data.name
    }
    this.userApiDispatcher.createUserProfile(userProfileDto).subscribe(responseDto => this.modalData.postAction?.(responseDto))
    this.dialogRef.close()
  }

  onSaveUpdateUserProfile(): void {
    const data: UpdateUserProfileModalData = this.modalData.data as UpdateUserProfileModalData

    const userProfileDto: UserProfileUpdateRequestDto = {
      isActiveProfile: data.isChecked,
      content: data.content,
      id: data.id,
      name: data.name,
      userId: data.userId
    }
    this.userApiDispatcher.updateUserProfile(userProfileDto).subscribe(responseDto => this.modalData.postAction?.(responseDto))
    this.dialogRef.close()
  }

  onDelete(): void {
    const data: UpdateUserProfileModalData = this.modalData.data as UpdateUserProfileModalData

    if(isNullOrEmpty(data.id)) {
      this.dialogRef.close()
      return
    }

    const dto: UserProfileDeletionRequestDto = {
      id: data.id,
    }

    this.userApiDispatcher.deleteUserProfile(dto).subscribe(_ => this.modalData.postAction?.())
    this.dialogRef.close()
  }

  onClose(): void {
    this.dialogRef.close()
  }

  protected readonly UserProfileModalType = UserProfileModalType;
}
