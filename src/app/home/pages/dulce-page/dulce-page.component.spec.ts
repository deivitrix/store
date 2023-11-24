import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulcePageComponent } from './dulce-page.component';

describe('DulcePageComponent', () => {
  let component: DulcePageComponent;
  let fixture: ComponentFixture<DulcePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DulcePageComponent]
    });
    fixture = TestBed.createComponent(DulcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
