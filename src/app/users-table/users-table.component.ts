// users-table.component.ts
import {Component, OnInit, signal, WritableSignal} from '@angular/core'
import {NgClass, NgForOf, NgIf} from "@angular/common"
import {Router, RouterOutlet} from "@angular/router"
import {UserApiDispatcher} from "../api/api-dispatcher/user-api-dispatcher.service"
import {emptyUser, User, userIsValid, UserProfile, UserRole} from "../entities/user"
import {FormsModule} from "@angular/forms"
import {UserProfileDeletionRequestDto, userToUserCreationRequestDTO} from "../entities/dtos/user-dtos"
import {listEnumStringValues} from "../utility/utility"
import {FlexModule} from "@angular/flex-layout"
import {NavigationService} from "../navigation/navigation.service"
import {MatButton} from "@angular/material/button"
import {
  CreateUserProfileModalData,
  UpdateUserProfileModalData,
  UserProfileModalComponent,
  UserProfileModalData,
  UserProfileModalType
} from "../user-profile-modal/user-profile-modal.component"
import {MatDialog} from "@angular/material/dialog"
import {FilterPipe} from "../utility/pipes/filter.pipe"
import {MatCheckbox} from "@angular/material/checkbox"
import {AppSettingsService} from "../state-management/app-settings.service"
import {AngularToastifyModule, ToastService} from "angular-toastify"
import {NotificationService} from "../cross-cutting/notification/notification.service"
import {ToastifyBuilder} from "../cross-cutting/notification/toastify/toastify-properties-builder";

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet,
    NgIf,
    FormsModule,
    FlexModule,
    MatButton,
    NgClass,
    FilterPipe,
    MatCheckbox,
    AngularToastifyModule
  ], // In case you need additional Angular features like forms, pipes, etc.
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  // users: User[] = []
  users: WritableSignal<User[]> = signal<User[]>([])
  isAddingNewUser = false
  newUser: User = {
    email: '',
    role: UserRole.Admin,
    password: '',
    profiles: [],
    id: ''
  }
  userRoles = listEnumStringValues(UserRole)
  deleteProfileOnRightClick: boolean = true


  constructor(
    private userApiDispatcher: UserApiDispatcher,
    private appSettingsService: AppSettingsService,
    private notificationService: NotificationService,
    private router: Router,
    protected navigationService: NavigationService,
    protected dialog: MatDialog) {
  }

  addNewUserRow() {
    this.isAddingNewUser = true
  }

  onRightClick(event: MouseEvent, profile: UserProfile): void {
    event.preventDefault()

    if(this.appSettingsService.deleteProfileOnRightClickIsNotEnabled())
      return

    const dto: UserProfileDeletionRequestDto = {
      id: profile.id,
    }

    this.userApiDispatcher.deleteUserProfile(dto).subscribe(_ => this.loadUsers())

  }

  deleteAllUsers() {
    this.userApiDispatcher.deleteAllUsers().subscribe()
    this.users().length = 0
  }

  saveNewUser() {
    if (userIsValid(this.newUser)) {
      this.userApiDispatcher.createUserUrl(userToUserCreationRequestDTO(this.newUser)).subscribe()

      this.users().push({...this.newUser})
      this.newUser = emptyUser()
      this.isAddingNewUser = false
    } else {
      alert('Please fill in all fields.')
    }
  }

  showToast() {
    this.notificationService.pushNotification(ToastifyBuilder.getDefaultConfig())
  }

  ngOnInit(): void {
    this.loadUsers()
  }

  // Load users from the API
  loadUsers(): void {
    this.userApiDispatcher.getAllUsers().subscribe(users => this.users.set(users))
  }

  openCreateUserProfileModal(user: User): void {
    const data: CreateUserProfileModalData = {
      content: "",
      name: "",
      userId: user.id,
      isChecked: false
    }

    const userProfileModalData: UserProfileModalData = {
      data: data,
      modalType: UserProfileModalType.Create,
      postAction: _ => this.loadUsers()
      // postAction: (data: UserProfileCreationResponseDto | UserProfileUpdateResponseDto) => {
      //   const responseDto: UserProfileCreationResponseDto = data as UserProfileCreationResponseDto
      //
      //   const updatedUsers: User[] = this.users().map(user => user.id === responseDto.userId
      //     ? {...user, profiles: [...user.profiles, responseDto]}
      //     : user
      //   )
      //
      //   this.users.set(updatedUsers)
      // }
    }

    this.dialog.open(UserProfileModalComponent, {data: userProfileModalData})
  }

  openUpdateUserProfileModal(profile: UserProfile): void {
    const data: UpdateUserProfileModalData = {
      content: profile.content,
      name: profile.name,
      id: profile.id,
      isChecked: profile.isActiveProfile,
      userId: profile.userId,
    }

    const userProfileModalData: UserProfileModalData = {
      data: data,
      modalType: UserProfileModalType.Update,
      postAction: _ => this.loadUsers()
      // postAction: (data: UserProfileCreationResponseDto | UserProfileUpdateResponseDto) => {
      //   const responseDto: UserProfileUpdateResponseDto = data as UserProfileUpdateResponseDto
      //
      //   const updatedUsers: User[] = this.users().map(user => user.id === responseDto.userId
      //     ? {...user, profiles: user.profiles.map(profile => profile.id === responseDto.id ? responseDto : profile)}
      //     : user
      //   )
      //   this.users.set(updatedUsers)
      // }
    }

    this.dialog.open(UserProfileModalComponent, {data: userProfileModalData})
  }
}
