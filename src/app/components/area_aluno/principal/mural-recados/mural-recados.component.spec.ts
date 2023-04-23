import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralRecadosComponent } from './mural-recados.component';

describe('MuralRecadosComponent', () => {
  let component: MuralRecadosComponent;
  let fixture: ComponentFixture<MuralRecadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralRecadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralRecadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
