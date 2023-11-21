import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionComponentComponent } from './informacion-component.component';

describe('InformacionComponentComponent', () => {
  let component: InformacionComponentComponent;
  let fixture: ComponentFixture<InformacionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionComponentComponent]
    });
    fixture = TestBed.createComponent(InformacionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
