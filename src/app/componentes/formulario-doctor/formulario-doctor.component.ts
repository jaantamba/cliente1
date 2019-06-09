
import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { especialidad } from 'src/app/models/especialidad';
import { doctor } from 'src/app/models/doctor';
import { DoctorService} from '../../services/doctor.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { persona } from 'src/app/models/persona';
import { objeto } from 'src/app/models/objeto';


@Component({
  selector: 'app-formulario-doctor',
  templateUrl: './formulario-doctor.component.html',
  styleUrls: ['./formulario-doctor.component.css']
})
export class FormularioDoctorComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  persona:persona={
    PER_ID:0,
    PER_NOMBRES:'',
    PER_APELLIDOS:'',
    PER_CEDULA:'',
    PER_TELEFONO:'',
    PER_DIRECCION:'',
    PER_GENERO:'',
    PER_TIPO_SANGRE:'',
    PER_TIPO:0
};
  //doctor: any=[];
  especialidad: especialidad={
    ESP_ID:0,
    ESP_NOMBRE:'',
    ESP_DESCRIPCION:''
  };
  especialidadAux: especialidad={
    ESP_ID:0,
    ESP_NOMBRE:'',
    ESP_DESCRIPCION:''
  };

  objeto:objeto={
    ID:0
  };
  doctor:doctor={
    PER_ID:0,
    ESP_ID:0
  };
  editar:boolean = false;

  constructor(private modalService:NgbModal,private doctorService:DoctorService, private router:Router, private activedRoute:ActivatedRoute) { }

  
  ngOnInit() {
    this.doctorService.obtenerEspecialidad().subscribe(
      respon=> {
        this.especialidad=respon;
      },
    );

    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.doctorService.obtenerUnEspecialidad(params.id).subscribe(
        respon=> {
          this.especialidadAux=respon;
          console.log(this.especialidadAux)
        },
      );
      this.doctorService.obtenerUnDoctor(params.id).subscribe(
        res=>{
          this.persona=res;
          console.log(this.persona)
          this.editar=true;
        },
        err=>console.error(err)
      )
    }
  }

  guardarPersona(content){
    //delete this.doctor.id_doctor;

    this.persona.PER_TIPO=1;
    console.log(this.doctor);
    this.doctorService.guardarDoctor(this.persona)
    .subscribe(
     res=>{
       console.log(res)
       this.doctorService.obtenerId().subscribe(
        respon=> {
          this.objeto=respon;
          this.doctor.PER_ID=this.objeto.ID;
          this.doctorService.guardarDoctorEspecialidad(this.doctor)
          .subscribe(
            res=>{

            }
          )
        },
      );
       this.modalService.open(content,{ windowClass: 'dark-modal'});
       //this.router.navigate(['/personas/doctor/todos'])
      },
     err=> console.log(err)
    )
    
  }

  actualizarPersona(content){
   
   console.log(this.persona)
    this.doctorService.actualizarDoctor(this.persona.PER_ID,this.persona)
    .subscribe(
      res=>{
        this.modalService.open(content,{ windowClass: 'dark-modal'});
        this.router.navigate(['/personas/doctor/todos'])
       },
      err=> console.log(err)
     )
  }

}
