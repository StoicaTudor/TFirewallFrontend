import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserProfileModalComponent } from './create-user-profile-modal.component';

describe('CreateUserProfileModalComponent', () => {
  let component: CreateUserProfileModalComponent;
  let fixture: ComponentFixture<CreateUserProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserProfileModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
