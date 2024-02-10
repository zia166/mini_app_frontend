import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserDetailComponent } from './modal-user-detail.component';

describe('ModalUserDetailComponent', () => {
  let component: ModalUserDetailComponent;
  let fixture: ComponentFixture<ModalUserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUserDetailComponent]
    });
    fixture = TestBed.createComponent(ModalUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
