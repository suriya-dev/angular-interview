import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSwipComponent } from './profile-swip.component';

describe('ProfileSwipComponent', () => {
  let component: ProfileSwipComponent;
  let fixture: ComponentFixture<ProfileSwipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileSwipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSwipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
