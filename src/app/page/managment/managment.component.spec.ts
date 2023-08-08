import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentComponent } from './managment.component';

describe('ManagmentComponent', () => {
  let component: ManagmentComponent;
  let fixture: ComponentFixture<ManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagmentComponent]
    });
    fixture = TestBed.createComponent(ManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
