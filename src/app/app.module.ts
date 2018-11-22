import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MarcadorDialogComponent } from './components/mapa/marcador-dialog.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  entryComponents: [
    MarcadorDialogComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MarcadorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
