import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenComponentComponent } from './imagen-component.component';

describe('ImagenComponentComponent', () => {
  let component: ImagenComponentComponent;
  let fixture: ComponentFixture<ImagenComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagenComponentComponent]
    });
    fixture = TestBed.createComponent(ImagenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
