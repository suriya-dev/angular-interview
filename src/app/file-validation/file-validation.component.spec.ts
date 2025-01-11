import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileValidationComponent } from './file-validation.component';

describe('FileValidationComponent', () => {
  let component: FileValidationComponent;
  let fixture: ComponentFixture<FileValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
