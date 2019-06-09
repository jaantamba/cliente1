import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';
import { PacienteService } from 'src/app/services/paciente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { paciente } from '../../models/paciente';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  headElements = ['CÉDULA','NOMBREs', 'APELLIDOS', 'OPCIONES'];
  firstItemIndex=0;
  lastItemIndex=0;
  elements: any = [];
  paciente: any=[];
  nombre: string=null;
  previous: string;
  constructor(private pacienteService:PacienteService,private modalService:NgbModal,private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cargarPaciente();
  }
  cargarPaciente(){
    this.pacienteService.obtenerPaciente().subscribe(
      
      res=> {
        this.paciente=res;
        console.log(this.paciente);
        let numero:number = Object.keys(this.paciente).length;
        
        for (let i = 1; i <= numero; i++) {
          this.elements.push({ id: i.toString()});
        }
        this.tableService.setDataSource(this.elements);
      },
      err=> console.error(err)
    );
    this.paciente=this.tableService.getDataSource();
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
  eliminarPaciente(id:string){
    this.pacienteService.eliminarPaciente(id).subscribe(
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
  detallePaciente(persona,contentDetalle){
    this.modalService.open(contentDetalle,{ windowClass: 'dark-modal'});
  }
  buscarPaciente(nombre:string){
    console.log(nombre);
    if(nombre=='undefined'){
      this.ngOnInit();
    }else if(nombre==null){
      this.ngOnInit();
    }else if(nombre==""){
      this.ngOnInit();
    }else{
      this.pacienteService.buscarPaciente(nombre).subscribe(
        res=> {
          this.paciente=res;
        },
        err=> console.error(err)
      );
    }
  }

}
