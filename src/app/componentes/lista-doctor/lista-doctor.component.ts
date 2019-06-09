import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { MdbTableService, MdbTablePaginationComponent} from 'angular-bootstrap-md'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { doctor} from '../../models/doctor'

@Component({
  selector: 'app-lista-doctor',
  templateUrl: './lista-doctor.component.html',
  styleUrls: ['./lista-doctor.component.css']
})
export class ListaDoctorComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  headElements = ['CÉDULA','NOMBRE', 'APELLIDO','ESPECIALIDAD', 'OPCIONES'];
  firstItemIndex;
  lastItemIndex;
  elements: any = [];
  doctor: any=[];
  persona:any=[];
  nombre: string=null;
  previous: string;
  constructor(private doctorService:DoctorService,private modalService:NgbModal,private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cargarDoctor();
  }
  cargarDoctor(){
    this.doctorService.obtenerDoctor().subscribe(
      
      res=> {
        this.persona=res;
        console.log(this.persona);
        let numero:number = Object.keys(this.persona).length;
        
        for (let i = 1; i <= numero; i++) {
          this.elements.push({ id: i.toString()});
        }
        this.tableService.setDataSource(this.elements);
      },
      err=> console.error(err)
    );
    this.persona=this.tableService.getDataSource();
    this.previous=this.tableService.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }
  eliminarPersona( persona ,content){
    this.modalService.open(content,{ windowClass: 'dark-modal'});
    //this.modalRef=this.modalService.open(content,{ windowClass: 'dark-modal'});
  }
  detalleCliente(persona,contentDetalle){
    this.modalService.open(contentDetalle,{ windowClass: 'dark-modal'});
  }

  eliminarRegistro(id:string){
    this.doctorService.eliminarDoctor(id).subscribe(
      res=>{
        console.log(res)
        //this.modalRef.close();
        this.modalService.dismissAll();
        this.ngOnInit();
      },
      err=>console.log(err)
    )
  }
  
  buscarPersona(nombre:string){
    console.log(nombre);
    if(nombre=='undefined'){
      this.ngOnInit();
    }else if(nombre==null){
      this.ngOnInit();
    }else if(nombre==""){
      this.ngOnInit();
    }else{
      this.doctorService.buscarDoctor(nombre).subscribe(
        res=> {
          this.persona=res;
        },
        err=> console.error(err)
      );
    }
  } 
}
