import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPageComponent } from './black-page.component';

describe('BlackPageComponent', () => {
  let component: BlackPageComponent;
  let fixture: ComponentFixture<BlackPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackPageComponent]
    });
    fixture = TestBed.createComponent(BlackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
