import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursoComponent } from './editar-curso.component';

describe('EditarCurspComponent', () => {
  let component: EditarCursoComponent;
  let fixture: ComponentFixture<EditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
