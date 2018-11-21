import { Component, OnInit } from '@angular/core';

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
  public lat = -34.688003;
  public lng = -58.729416;

  constructor() { }

  ngOnInit() {
  }

}
