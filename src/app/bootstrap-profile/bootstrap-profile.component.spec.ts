import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapProfileComponent } from './bootstrap-profile.component';

describe('BootstrapProfileComponent', () => {
  let component: BootstrapProfileComponent;
  let fixture: ComponentFixture<BootstrapProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootstrapProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
