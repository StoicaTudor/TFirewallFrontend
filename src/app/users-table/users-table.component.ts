// users-table.component.ts
import {Component, OnInit} from '@angular/core'
import {NgForOf, NgIf} from "@angular/common"
import {RouterOutlet} from "@angular/router"
import {UserApiDispatcher} from "../api/api-dispatcher/user-api-dispatcher.service"
import {emptyUser, User, UserRole, userIsValid} from "../entities/user"
import {FormsModule} from "@angular/forms"
import {userToUserCreationRequestDTO} from "../entities/dtos/user-dtos"
import {listEnumStringValues} from "../state-management/utility"
import {FlexModule} from "@angular/flex-layout"
import {Router} from '@angular/router'
import {NavigationService} from "../navigation/navigation.service"
import {MatButton} from "@angular/material/button"
import {
  CreateUserProfileModalComponent,
  CreateUserProfileModalData
} from "../create-user-profile-modal/create-user-profile-modal.component"
import {MatDialog} from "@angular/material/dialog"

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [
    NgForOf,
    RouterOutlet,
    NgIf,
    FormsModule,
    FlexModule,
    MatButton
  ], // In case you need additional Angular features like forms, pipes, etc.
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: User[] = []
  isAddingNewUser = false
  newUser: User = {
    email: '',
    role: UserRole.Admin,
    password: '',
    profiles: [],
    id: ''
  }
  userRoles = listEnumStringValues(UserRole)


  constructor(
    private userApiDispatcher: UserApiDispatcher,
    private router: Router,
    protected navigationService: NavigationService,
    protected dialog: MatDialog) {
  }

  addNewUserRow() {
    this.isAddingNewUser = true
  }

  deleteAllUsers() {
    this.userApiDispatcher.deleteAllUsers().subscribe()
    this.users.length = 0
  }

  saveNewUser() {
    if (userIsValid(this.newUser)) {
      this.userApiDispatcher.createUserUrl(userToUserCreationRequestDTO(this.newUser)).subscribe()

      this.users.push({...this.newUser})
      this.newUser = emptyUser()
      this.isAddingNewUser = false
    } else {
      alert('Please fill in all fields.')
    }
  }

  ngOnInit(): void {
    this.loadUsers()
  }

  // Load users from the API
  loadUsers(): void {
    this.userApiDispatcher.getAllUsers().subscribe(users => this.users = users)
  }

  openModal(userId: string): void {
    const data: CreateUserProfileModalData = {
      content: '',
      name: '',
      userID: userId
    }

    this.dialog.open(CreateUserProfileModalComponent, {data})
  }
}
