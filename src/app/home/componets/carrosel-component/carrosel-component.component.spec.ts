import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselComponentComponent } from './carrosel-component.component';

describe('CarroselComponentComponent', () => {
  let component: CarroselComponentComponent;
  let fixture: ComponentFixture<CarroselComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroselComponentComponent]
    });
    fixture = TestBed.createComponent(CarroselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
