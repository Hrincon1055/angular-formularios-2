import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  public formulario: FormGroup;

  constructor(private empleadosService: EmpleadosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      edad: new FormControl(''),
      departamento: new FormControl(''),
      password: new FormControl(''),
      imagen: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    this.empleadosService.insert(this.formulario.value);
  }
}
