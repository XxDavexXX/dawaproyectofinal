export class Profesor {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
  
    constructor(id: number = 0, nombre: string = '', apellido: string = '', email: string = '') {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
    }
  }
  