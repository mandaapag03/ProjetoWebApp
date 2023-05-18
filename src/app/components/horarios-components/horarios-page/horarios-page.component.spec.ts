import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosPageComponent } from './horarios-page.component';

describe('HorariosPageComponent', () => {
  let component: HorariosPageComponent;
  let fixture: ComponentFixture<HorariosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
