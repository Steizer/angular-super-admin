import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormByCodeComponent } from './user-form-by-code.component';

describe('UserFormByCodeComponent', () => {
  let component: UserFormByCodeComponent;
  let fixture: ComponentFixture<UserFormByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormByCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
