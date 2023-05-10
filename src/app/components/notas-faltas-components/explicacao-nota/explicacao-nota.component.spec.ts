import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicacaoNotaComponent } from './explicacao-nota.component';

describe('ExplicacaoNotaComponent', () => {
  let component: ExplicacaoNotaComponent;
  let fixture: ComponentFixture<ExplicacaoNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplicacaoNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplicacaoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
