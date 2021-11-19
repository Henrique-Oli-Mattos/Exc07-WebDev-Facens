import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularMediaFacensComponent } from './calcular-media-facens.component';

describe('CalcularMediaFacensComponent', () => {
  let component: CalcularMediaFacensComponent;
  let fixture: ComponentFixture<CalcularMediaFacensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularMediaFacensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularMediaFacensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
