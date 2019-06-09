import { Component, OnInit } from '@angular/core';
import { enfermera } from 'src/app/models/enfermera';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnfermeraService} from '../../services/enfermera.service';

@Component({
  selector: 'app-formulario-enfermera',
  templateUrl: './formulario-enfermera.component.html',
  styleUrls: ['./formulario-enfermera.component.css']
})
export class FormularioEnfermeraComponent implements OnInit {

  constructor(private modalService:NgbModal,private enfermeraService:EnfermeraService, private router:Router, private activedRoute:ActivatedRoute) { }
  enfermera:enfermera={
    ENF_ID:0,
    ENF_CEDULA:'',
    ENF_NOMBRES:'',
    ENF_APELLIDOS:'',
    ENF_TELEFONO:'',
    ENF_DIRECCION:'',
    ENF_ESTADO:''
}
editar:boolean = false;
  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.enfermeraService.obtenerUnaEnfermera(params.id).subscribe(
        res=>{
          this.enfermera=res;
          console.log(this.enfermera)
          this.editar=true;
        },
        err=>console.error(err)
      )
    }
  }
  guardarEnfermera(content){
    //delete this.doctor.id_doctor;
    this.enfermera.ENF_ESTADO="E";
    //this.doctor.ESP_ID=1;
    console.log(this.enfermera);
    this.enfermeraService.guardarEnfermera(this.enfermera)
    .subscribe(
     res=>{
       console.log(res)
       this.modalService.open(content,{ windowClass: 'dark-modal'});
       this.router.navigate(['/personas/enfermera/todos'])
      },
     err=> console.log(err)
    )
  }
  actualizarEnfermera(content){
    console.log(this.enfermera.ENF_ID)
    console.log(this.enfermera)
     this.enfermeraService.actualizarEnfermera(this.enfermera.ENF_ID,this.enfermera)
     .subscribe(
       res=>{
         this.modalService.open(content,{ windowClass: 'dark-modal'});
         this.router.navigate(['/personas/enfermera/todos'])
        },
       err=> console.log(err)
      )
   }
}
