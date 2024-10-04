import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallLogsComponent } from './firewall-logs.component';

describe('FirewallLogsComponent', () => {
  let component: FirewallLogsComponent;
  let fixture: ComponentFixture<FirewallLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirewallLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirewallLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
