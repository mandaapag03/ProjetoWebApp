import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletimDisciplinasComponent } from './boletim-disciplinas.component';

describe('BoletimDisciplinasComponent', () => {
  let component: BoletimDisciplinasComponent;
  let fixture: ComponentFixture<BoletimDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletimDisciplinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletimDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
