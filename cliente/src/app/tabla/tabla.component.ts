import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../services/departamento/departamento.service';

@Component({
  selector: 'app-tabla',
  standalone: false,
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit{
  departamentos: any[]= [];

  constructor(private departamentoService: DepartamentoService){};

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe(
      data=>this.departamentos=data,
      error=> console.error('Error al cargar departamentos', error)
    );
  }
}
