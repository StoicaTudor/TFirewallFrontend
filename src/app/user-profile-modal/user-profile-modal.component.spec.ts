import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileModalComponent } from './user-profile-modal.component';

describe('CreateUserProfileModalComponent', () => {
  let component: UserProfileModalComponent;
  let fixture: ComponentFixture<UserProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
