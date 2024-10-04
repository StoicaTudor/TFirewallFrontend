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
import {UserProfileCreationRequestDto} from "../entities/dtos/user-dtos"

export interface CreateUserProfileModalData {
  content: string,
  name: string,
  userID: string
}

@Component({
  selector: 'app-create-user-profile-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatLabel,
    MatFormField,
    FormsModule,
    MatInput,
    MatDialogTitle,
    MatButton,
    MatDialogActions
  ],
  templateUrl: './create-user-profile-modal.component.html',
  styleUrl: './create-user-profile-modal.component.css'
})
export class CreateUserProfileModalComponent {
  modalData: CreateUserProfileModalData

  constructor(
    public dialogRef: MatDialogRef<CreateUserProfileModalComponent>,
    private userApiDispatcher: UserApiDispatcher,
    // Data passed from the parent component
    @Inject(MAT_DIALOG_DATA) data: CreateUserProfileModalData) {
    this.modalData = data
  }

  onSave(): void {
    const userProfileDto: UserProfileCreationRequestDto = {
      content: this.modalData.content,
      userId: this.modalData.userID,
      name: this.modalData.name
    }
    this.userApiDispatcher.createUserProfile(userProfileDto).subscribe()
    this.dialogRef.close() // Close modal after save
  }

  onDelete(): void {
    this.dialogRef.close() // Close modal after delete
  }

  onClose(): void {
    this.dialogRef.close() // Close modal
  }
}
