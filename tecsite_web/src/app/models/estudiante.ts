export class Estudiante {
    id: number;
    nombre: string;
    correo: string;
    fecharegistro: Date;
  
    constructor(id: number = 0, nombre: string = '', correo: string = '', fecharegistro: Date = new Date()) {
      this.id = id;
      this.nombre = nombre;
      this.correo = correo;
      this.fecharegistro = fecharegistro;
    }
  }
  