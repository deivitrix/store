import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosComponentComponent } from './pedidos-component.component';

describe('PedidosComponentComponent', () => {
  let component: PedidosComponentComponent;
  let fixture: ComponentFixture<PedidosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosComponentComponent]
    });
    fixture = TestBed.createComponent(PedidosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
