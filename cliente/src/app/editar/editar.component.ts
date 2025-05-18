import { Component } from '@angular/core';
import { DepartamentoService } from '../services/departamento/departamento.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

var DEPARTAMENTO: { _id: string; } | null=null;

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
      codDepartamento: [this.departamento.codDepartamento],
      descDepartamento: [this.departamento.descDepartamento],
      volDepartamento: [this.departamento.volDepartamento]
    })
  };

  ngOnInit(): void{
    this.departamentoService.findDepartamentoByID().subscribe({
      next: data=>{
        DEPARTAMENTO=data;
        // console.log(data);
        // console.log(DEPARTAMENTO);
        this.formEditar=this.fb.group({
          codDepartamento: [data.codDepartamento],
          descDepartamento: [data.descDepartamento],
          volDepartamento: [data.volDepartamento]
        })
      },
      error: error=>{
        console.error('Error al cargar el departamento', error)
      }
    });
  }

  cambiar(): void{
    if(this.formEditar.valid && DEPARTAMENTO!=null){
      console.log(DEPARTAMENTO);
      console.log(this.formEditar.value);
      this.departamentoService.editarDepartamento(DEPARTAMENTO._id, this.formEditar.value)
        .subscribe({
          next: ()=>alert('Departamento actualizado'),
          error: err => console.error('Error al actualizar', err)
        });
    }
  }
}
