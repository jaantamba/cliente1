import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioDoctorComponent } from './componentes/formulario-doctor/formulario-doctor.component';
import { FormularioEnfermeraComponent} from './componentes/formulario-enfermera/formulario-enfermera.component';
import { ListaDoctorComponent } from './componentes/lista-doctor/lista-doctor.component';
import { ListaEnfermeraComponent} from './componentes/lista-enfermera/lista-enfermera.component';
import { FormularioPacienteComponent } from './componentes/formulario-paciente/formulario-paciente.component';
import { ListaPacienteComponent } from './componentes/lista-paciente/lista-paciente.component';
import { LoginVentanaComponent} from './componentes/login-ventana/login-ventana.component';
import { PacienteSignosComponent } from './componentes/paciente-signos/paciente-signos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'personas/enfermera/agregar',
    component: FormularioEnfermeraComponent
  },
  {
    path:'personas/paciente/agregar',
    component: FormularioPacienteComponent
  },
  {
    path:'personas/enfermera/todos',
    component: ListaEnfermeraComponent
  },
  {
    path:'personas/doctor/agregar',
    component: FormularioDoctorComponent  
  },
  {
    path:'personas/doctor/todos',
    component: ListaDoctorComponent  
  },
  {
    path:'personas/paciente/todos',
    component: ListaPacienteComponent  
  },
  {
    path:'personas/paciente/signos',
    component: PacienteSignosComponent  
  },
  {
    path:'personas/editar/doctor/:id',
    component: FormularioDoctorComponent
  },
  {
    path:'personas/editar/enfermera/:id',
    component: FormularioEnfermeraComponent
  },
  {
    path:'personas/editar/paciente/:id',
    component: FormularioPacienteComponent
  },
  {
    path:'login',
    component: LoginVentanaComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
