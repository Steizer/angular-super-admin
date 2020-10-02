import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormByTemplateComponent } from './user-form-by-template.component';

describe('UserFormByTemplateComponent', () => {
  let component: UserFormByTemplateComponent;
  let fixture: ComponentFixture<UserFormByTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormByTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormByTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
