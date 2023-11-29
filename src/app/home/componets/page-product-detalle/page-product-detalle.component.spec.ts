import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductDetalleComponent } from './page-product-detalle.component';

describe('PageProductDetalleComponent', () => {
  let component: PageProductDetalleComponent;
  let fixture: ComponentFixture<PageProductDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageProductDetalleComponent]
    });
    fixture = TestBed.createComponent(PageProductDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
