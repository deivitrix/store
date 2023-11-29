import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRelacionComponent } from './product-relacion.component';

describe('ProductRelacionComponent', () => {
  let component: ProductRelacionComponent;
  let fixture: ComponentFixture<ProductRelacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRelacionComponent]
    });
    fixture = TestBed.createComponent(ProductRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
