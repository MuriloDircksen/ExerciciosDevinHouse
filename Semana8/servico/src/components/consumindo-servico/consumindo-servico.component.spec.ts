import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumindoServicoComponent } from './consumindo-servico.component';

describe('ConsumindoServicoComponent', () => {
  let component: ConsumindoServicoComponent;
  let fixture: ComponentFixture<ConsumindoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumindoServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumindoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
