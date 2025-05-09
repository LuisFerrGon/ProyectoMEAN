import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from './services/departamento/departamento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'cliente';

  departamentos: any[] = [];

  constructor(
    private departamentoService: DepartamentoService
  ){}

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe(data=>{
      this.departamentos=data
    });
  }

  // addItem(codigo: String, descrip: String, volumen: Number){
  //   const nDepartamento={codigo, descrip, volumen};
  //   this.departamentoService.addItem(nDepartamento).subscribe(departamento=>{
  //     this.departamentos.push(departamento);
  //   });
  // }
}
