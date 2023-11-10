import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutimeComponent } from './menutime.component';

describe('MenutimeComponent', () => {
  let component: MenutimeComponent;
  let fixture: ComponentFixture<MenutimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenutimeComponent]
    });
    fixture = TestBed.createComponent(MenutimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
