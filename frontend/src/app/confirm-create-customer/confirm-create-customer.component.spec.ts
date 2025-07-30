import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCreateCustomerComponent } from './confirm-create-customer.component';

describe('ConfirmCreateCustomerComponent', () => {
  let component: ConfirmCreateCustomerComponent;
  let fixture: ComponentFixture<ConfirmCreateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmCreateCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
