import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileInfoComponent } from './my-profile-info.component';

describe('MyProfileInfoComponent', () => {
  let component: MyProfileInfoComponent;
  let fixture: ComponentFixture<MyProfileInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProfileInfoComponent]
    });
    fixture = TestBed.createComponent(MyProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
