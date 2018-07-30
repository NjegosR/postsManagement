import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddModalComponent } from './user-add-modal.component';

describe('UserAddModalComponent', () => {
  let component: UserAddModalComponent;
  let fixture: ComponentFixture<UserAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
