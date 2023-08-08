import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelmenuComponent } from './panelmenu.component';

describe('PanelmenuComponent', () => {
  let component: PanelmenuComponent;
  let fixture: ComponentFixture<PanelmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelmenuComponent]
    });
    fixture = TestBed.createComponent(PanelmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
