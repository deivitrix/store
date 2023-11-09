import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLoginComponent } from './icons-login.component';

describe('IconsLoginComponent', () => {
  let component: IconsLoginComponent;
  let fixture: ComponentFixture<IconsLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsLoginComponent]
    });
    fixture = TestBed.createComponent(IconsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
