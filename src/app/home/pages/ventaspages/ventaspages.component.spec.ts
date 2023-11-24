import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaspagesComponent } from './ventaspages.component';

describe('VentaspagesComponent', () => {
  let component: VentaspagesComponent;
  let fixture: ComponentFixture<VentaspagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaspagesComponent]
    });
    fixture = TestBed.createComponent(VentaspagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
