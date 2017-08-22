import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
// Importamos el módulo http del paquete http de Angular
import { HttpModule, JsonpModule } from '@angular/http';

// Se lo pasamos a imports para que lo cargue en la aplicación
@NgModule({
  declarations: [
    AppComponent,    
    FaceComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
