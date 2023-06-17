import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchscreenComponent } from './launchscreen.component';

describe('LaunchscreenComponent', () => {
  let component: LaunchscreenComponent;
  let fixture: ComponentFixture<LaunchscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
