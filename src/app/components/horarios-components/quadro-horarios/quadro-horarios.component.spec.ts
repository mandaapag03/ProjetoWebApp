import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroHorariosComponent } from './quadro-horarios.component';

describe('QuadroHorariosComponent', () => {
  let component: QuadroHorariosComponent;
  let fixture: ComponentFixture<QuadroHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroHorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadroHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
