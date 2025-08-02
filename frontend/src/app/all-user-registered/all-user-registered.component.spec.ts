import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserRegisteredComponent } from './all-user-registered.component';

describe('AllUserRegisteredComponent', () => {
  let component: AllUserRegisteredComponent;
  let fixture: ComponentFixture<AllUserRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllUserRegisteredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUserRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
