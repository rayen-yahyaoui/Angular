import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantesComponent } from './add-plantes.component';

describe('AddPlantesComponent', () => {
  let component: AddPlantesComponent;
  let fixture: ComponentFixture<AddPlantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
