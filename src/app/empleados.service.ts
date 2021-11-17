import { Injectable } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  public arrEmpleados!: Empleado[];

  constructor() {
    this.arrEmpleados = [];
  }
  insert(empleado: Empleado): void {
    this.arrEmpleados.push(empleado);
    console.log(this.arrEmpleados);
  }
  getAll(): Promise<Empleado[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrEmpleados);
    });
  }
}
