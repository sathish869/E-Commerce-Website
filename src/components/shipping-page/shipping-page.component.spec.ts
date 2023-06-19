import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingPageComponent } from './shipping-page.component';

describe('ShippingPageComponent', () => {
  let component: ShippingPageComponent;
  let fixture: ComponentFixture<ShippingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingPageComponent]
    });
    fixture = TestBed.createComponent(ShippingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
