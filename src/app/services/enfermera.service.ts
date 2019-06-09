import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //peticiones http
import { enfermera} from '../models/enfermera';
@Injectable({
  providedIn: 'root'
})
export class EnfermeraService {
  API_URI=`http://localhost:3400/api`;
  constructor(private http: HttpClient) { }
  
  guardarEnfermera(enfermera:enfermera){
    return this.http.post(`${this.API_URI}/usuarios/enfermera`,enfermera);
  }
  obtenerEnfermera(){
    return this.http.get(`${this.API_URI}/usuarios/enfermera`);
  }
  obtenerUnaEnfermera(id:string){
    return this.http.get(`${this.API_URI}/usuarios/enfermera/${id}`);
  }
  actualizarEnfermera(id:string|number, enfermeraActualizado:enfermera){
    return this.http.put(`${this.API_URI}/usuarios/enfermera/${id}`,enfermeraActualizado);
  }
  eliminarEnfermera(id:string){
    return this.http.delete(`${this.API_URI}/usuarios/enfermera/${id}`);
  }
  buscarEnfermera(nombre:string){
    return this.http.get(`${this.API_URI}/usuarios/enfermera/obtener/${nombre}`);
  }
}
