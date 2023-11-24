import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloweenPageComponent } from './halloween-page.component';

describe('HalloweenPageComponent', () => {
  let component: HalloweenPageComponent;
  let fixture: ComponentFixture<HalloweenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalloweenPageComponent]
    });
    fixture = TestBed.createComponent(HalloweenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
