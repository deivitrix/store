import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaPageComponent } from './bebida-page.component';

describe('BebidaPageComponent', () => {
  let component: BebidaPageComponent;
  let fixture: ComponentFixture<BebidaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidaPageComponent]
    });
    fixture = TestBed.createComponent(BebidaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
