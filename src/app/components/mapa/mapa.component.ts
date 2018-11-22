import { Component, OnInit, EventEmitter } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: [`
  agm-map {
    height: 450px;
  }
  `]
})
export class MapaComponent implements OnInit {

  public marcadores:Marcador[];

  public lat = -34.688003;
  public lng = -58.729416;

  constructor() { 
    this.marcadores = [];
    // let nuevoMarcador = new Marcador(-34.688003, -58.729416);
    // this.marcadores.push (nuevoMarcador);
    if (localStorage.getItem("marcadores") ){
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  ngOnInit() {
  }

  public agregarMarcador (evento) {
    let nuevoMarcador = new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push (nuevoMarcador);
    this.saveStorage();
  }

  private saveStorage() {
    localStorage.setItem("marcadores",JSON.stringify(this.marcadores));
  }

}
