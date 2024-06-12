import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLayoutComponentComponent } from './usuario-layout-component.component';

describe('UsuarioLayoutComponentComponent', () => {
  let component: UsuarioLayoutComponentComponent;
  let fixture: ComponentFixture<UsuarioLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioLayoutComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
