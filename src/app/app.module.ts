import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms' // add
import { HttpClientModule } from '@angular/common/http' // add
/*import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//add

import { ToastrModule } from 'ngx-toastr';//add

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
    /*LoginComponent,
    DashboardComponent,
    NuevoComponent,
    EditarComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // add
    FormsModule,// add
    HttpClientModule, // add
    BrowserAnimationsModule, // add
    ToastrModule.forRoot(), // add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
