import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { paciente } from 'src/app/models/paciente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-paciente-signos',
  templateUrl: './paciente-signos.component.html',
  styleUrls: ['./paciente-signos.component.css']
})
export class PacienteSignosComponent implements OnInit {

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
  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.pacienteService.obtenerUnPaciente(params.id).subscribe(
        res=>{
          this.paciente=res;
          console.log(this.paciente)
        },
        err=>console.error(err)
      )
    }
  }

}
