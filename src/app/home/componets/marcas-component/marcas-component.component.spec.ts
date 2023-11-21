import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasComponentComponent } from './marcas-component.component';

describe('MarcasComponentComponent', () => {
  let component: MarcasComponentComponent;
  let fixture: ComponentFixture<MarcasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcasComponentComponent]
    });
    fixture = TestBed.createComponent(MarcasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
