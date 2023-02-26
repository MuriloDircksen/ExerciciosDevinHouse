import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioServerJsonComponent } from './funcionario-server-json.component';

describe('FuncionarioServerJsonComponent', () => {
  let component: FuncionarioServerJsonComponent;
  let fixture: ComponentFixture<FuncionarioServerJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioServerJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioServerJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
