//cliente/services/usuarios/usuarios.spec.ts
import { TestBed } from '@angular/core/testing';

import { ServicioUsuario } from './usuarios';

describe('ServicioUsuario', () => {
  let service: ServicioUsuario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioUsuario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
