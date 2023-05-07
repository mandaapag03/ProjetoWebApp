import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasFaltasComponent } from './notas-faltas.component';

describe('NotasFaltasComponent', () => {
  let component: NotasFaltasComponent;
  let fixture: ComponentFixture<NotasFaltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasFaltasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
