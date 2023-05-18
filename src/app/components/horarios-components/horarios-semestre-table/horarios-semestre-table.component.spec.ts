import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosSemestreTableComponent } from './horarios-semestre-table.component';

describe('HorariosSemestreTableComponent', () => {
  let component: HorariosSemestreTableComponent;
  let fixture: ComponentFixture<HorariosSemestreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosSemestreTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosSemestreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
