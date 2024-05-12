import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importe aqui
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [AppComponent, UsuariosComponent],
  imports: [BrowserModule, MatSnackBarModule,AppRoutingModule, HttpClientModule, FormsModule], // Adicionar FormsModule aqui
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
