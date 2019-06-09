import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from "@angular/material";
import { DoctorService} from './services/doctor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { TableModule,WavesModule,InputsModule  } from 'angular-bootstrap-md';
import { FormularioDoctorComponent } from './componentes/formulario-doctor/formulario-doctor.component';
import { ListaDoctorComponent } from './componentes/lista-doctor/lista-doctor.component';
import { FormularioEnfermeraComponent } from './componentes/formulario-enfermera/formulario-enfermera.component';
import { EnfermeraService} from './services/enfermera.service';
import { ListaEnfermeraComponent } from './componentes/lista-enfermera/lista-enfermera.component';
import { FormularioPacienteComponent } from './componentes/formulario-paciente/formulario-paciente.component';
import { PacienteService} from './services/paciente.service';
import { ListaPacienteComponent } from './componentes/lista-paciente/lista-paciente.component';
import { LoginVentanaComponent } from './componentes/login-ventana/login-ventana.component';
import { PacienteSignosComponent } from './componentes/paciente-signos/paciente-signos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormularioDoctorComponent,
    ListaDoctorComponent,
    FormularioEnfermeraComponent,
    ListaEnfermeraComponent,
    FormularioPacienteComponent,
    ListaPacienteComponent,
    LoginVentanaComponent,
    PacienteSignosComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule, 
    MatDialogModule,
    A11yModule,
    WavesModule,
    TableModule,
    InputsModule,
    NgbModule.forRoot(),
    ],
  providers: [
    DoctorService,
    EnfermeraService,
    PacienteService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
