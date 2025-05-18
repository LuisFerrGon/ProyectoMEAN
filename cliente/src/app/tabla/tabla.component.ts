import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../services/departamento/departamento.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: false,
  templateUrl: 'tabla.component.html',
  styleUrl: 'tabla.component.css'
})

export class TablaComponent implements OnInit{
  departamentos: any[]= [];

  constructor(
    private departamentoService: DepartamentoService,
    private http: HttpClient,
    private router: Router
  ){};

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe(
      data=>this.departamentos=data,
      error=> console.error('Error al cargar departamentos', error)
    );
  }

  editarDepartamento(id: string) {
    let urlGetByID='http://localhost:8080/getByID';
    this.http.post(urlGetByID, { idDepartamento :id }, { withCredentials: true })
      .subscribe({
        next: () => this.router.navigate(['/editar']),
        error: err => console.error('Error al guardar ID en sesión:', err)
      })
    ;
  }
}