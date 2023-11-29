import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductoDetalleComponent } from './card-producto-detalle.component';

describe('CardProductoDetalleComponent', () => {
  let component: CardProductoDetalleComponent;
  let fixture: ComponentFixture<CardProductoDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProductoDetalleComponent]
    });
    fixture = TestBed.createComponent(CardProductoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
