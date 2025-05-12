import { Component } from '@angular/core';
import { DepartamentoService } from '../services/departamento/departamento.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: false,
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  departamento: any=[];
  formEditar: FormGroup;
  constructor(
    private departamentoService: DepartamentoService,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ){
    this.formEditar=this.fb.group({
      codigo: [this.departamento.codDepartamento],
      nombre: [this.departamento.descDepartamento],
      volumen: [this.departamento.volDepartamento]
    })
  };

  ngOnInit(): void{
    this.departamentoService.findDepartamentoByID().subscribe({
      next: data=>{
        this.formEditar=this.fb.group({
          codigo: [this.departamento.codDepartamento],
          nombre: [this.departamento.descDepartamento],
          volumen: [this.departamento.volDepartamento]
        })
      },
      error: error=>{
        console.error('Error al cargar el departamento', error)
      }
    });
  }
  cambiar(){
    console.log(this.formEditar.value);
  }
}
