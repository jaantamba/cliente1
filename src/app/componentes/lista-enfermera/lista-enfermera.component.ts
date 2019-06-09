import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { enfermera } from'../../models/enfermera';
import { EnfermeraService} from '../../services/enfermera.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbTableService, MdbTablePaginationComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-lista-enfermera',
  templateUrl: './lista-enfermera.component.html',
  styleUrls: ['./lista-enfermera.component.css']
})
export class ListaEnfermeraComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  headElements = ['CÉDULA','NOMBREs', 'APELLIDOS', 'OPCIONES'];
  firstItemIndex=0;
  lastItemIndex=0;
  elements: any = [];
  enfermera: any=[];
  nombre: string=null;
  previous: string;
  constructor(private enfermeraService:EnfermeraService,private modalService:NgbModal,private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

    this.cargarEnfermera();
  }
  cargarEnfermera(){
    this.enfermeraService.obtenerEnfermera().subscribe(
      
      res=> {
        this.enfermera=res;
        console.log(this.enfermera);
        let numero:number = Object.keys(this.enfermera).length;
        
        for (let i = 1; i <= numero; i++) {
          this.elements.push({ id: i.toString()});
        }
        this.tableService.setDataSource(this.elements);
      },
      err=> console.error(err)
    );
    this.enfermera=this.tableService.getDataSource();
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
  eliminarEnfermera(id:string){
    this.enfermeraService.eliminarEnfermera(id).subscribe(
      res=>{
        console.log(res)
        //this.modalRef.close();
        this.modalService.dismissAll();
        this.ngOnInit();
      },
      err=>console.log(err)
    )
  }
  eliminarPersona( persona ,content){
    this.modalService.open(content,{ windowClass: 'dark-modal'});
    //this.modalRef=this.modalService.open(content,{ windowClass: 'dark-modal'});
  }
  detalleEnfermera(persona,contentDetalle){
    this.modalService.open(contentDetalle,{ windowClass: 'dark-modal'});
  }
  buscarEnfermera(nombre:string){
    console.log(nombre);
    if(nombre=='undefined'){
      this.ngOnInit();
    }else if(nombre==null){
      this.ngOnInit();
    }else if(nombre==""){
      this.ngOnInit();
    }else{
      this.enfermeraService.buscarEnfermera(nombre).subscribe(
        res=> {
          this.enfermera=res;
        },
        err=> console.error(err)
      );
    }
  } 
}
