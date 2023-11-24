import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladoPageComponent } from './salado-page.component';

describe('SaladoPageComponent', () => {
  let component: SaladoPageComponent;
  let fixture: ComponentFixture<SaladoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaladoPageComponent]
    });
    fixture = TestBed.createComponent(SaladoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
