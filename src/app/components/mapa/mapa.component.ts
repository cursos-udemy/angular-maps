import { Component, OnInit } from "@angular/core";
import { Marcador } from "../../classes/marcador.class";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styles: [
    `
      agm-map {
        height: 450px;
      }
    `
  ]
})
export class MapaComponent implements OnInit {
  public marcadores: Marcador[];

  public lat = -34.688003;
  public lng = -58.729416;

  constructor(public snackBar: MatSnackBar) {
    this.marcadores = [];
    // let nuevoMarcador = new Marcador(-34.688003, -58.729416);
    // this.marcadores.push (nuevoMarcador);
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  ngOnInit() {}

  public agregarMarcador(evento) {
    let nuevoMarcador = new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.openSnackBar("Marcador Agregado", "Cerrar");
    this.saveStorage();
  }

  public borrarMarcador(index: number) {
    this.marcadores.splice(index, 1);
    this.openSnackBar("Marcador Eliminado", "Cerrar");
    this.saveStorage();
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private saveStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }
}
