import { Component, OnInit } from '@angular/core';
import { paciente } from 'src/app/models/paciente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PacienteService } from 'src/app/services/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.css']
})
export class FormularioPacienteComponent implements OnInit {

  constructor(private modalService:NgbModal,private pacienteService:PacienteService, private router:Router, private activedRoute:ActivatedRoute) { }
    paciente:paciente={
    PAC_ID:0,
    PAC_CEDULA:'',
    PAC_NOMBRES:'',
    PAC_APELLIDOS:'',
    PAC_TELEFONO:'',
    PAC_DIRECCION:'',
    PAC_TIPO_SANGRE:'',
    PAC_ESTADO:''
  }
  editar:boolean = false;
  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.pacienteService.obtenerUnPaciente(params.id).subscribe(
        res=>{
          this.paciente=res;
          console.log(this.paciente)
          this.editar=true;
        },
        err=>console.error(err)
      )
    }
  }
  guardarPaciente(content){
    //delete this.doctor.id_doctor;
    this.paciente.PAC_ESTADO="E";
    //this.doctor.ESP_ID=1;
    this.pacienteService.guardarPaciente(this.paciente)
    .subscribe(
     res=>{
       console.log(res)
       this.modalService.open(content,{ windowClass: 'dark-modal'});
       this.router.navigate(['/personas/paciente/todos'])
      },
     err=> console.log(err)
    )
  }
  actualizarPaciente(content){
    console.log(this.paciente.PAC_ID)
    console.log(this.paciente)
     this.pacienteService.actualizarPaciente(this.paciente.PAC_ID,this.paciente)
     .subscribe(
       res=>{
         this.modalService.open(content,{ windowClass: 'dark-modal'});
         this.router.navigate(['/personas/paciente/todos'])
        },
       err=> console.log(err)
      )
   }

}
