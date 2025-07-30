import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmModifyCustomerComponent } from './confirm-modify-customer.component';

describe('ConfirmModifyCustomerComponent', () => {
  let component: ConfirmModifyCustomerComponent;
  let fixture: ComponentFixture<ConfirmModifyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmModifyCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmModifyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
