export class Marcador {
  public latitud: number;
  public longitud: number;
  public titulo: string;
  public descripcion: string;

  constructor (latitud:number, longitud:number) {
    this.latitud = latitud;
    this.longitud = longitud;
    this.titulo = "Sin Titulo";
    this.descripcion = "Sin descripcion";
  }
}
