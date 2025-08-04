import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleModifyComponent } from './sale-modify.component';

describe('SaleModifyComponent', () => {
  let component: SaleModifyComponent;
  let fixture: ComponentFixture<SaleModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleModifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
