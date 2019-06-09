import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //peticiones http
import { doctor } from '../models/doctor';
import { persona } from '../models/persona';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  API_URI=`http://localhost:3400/api`;

  constructor(private http: HttpClient) { }

  obtenerDoctor(){
    return this.http.get(`${this.API_URI}/usuarios/doctor`);
  }
  obtenerId(){
    return this.http.get(`${this.API_URI}/usuarios/doctor/obtenerid/`);
  }
  guardarDoctorEspecialidad(doctor:doctor){
    return this.http.post(`${this.API_URI}/usuarios/especialidad`,doctor);
  }
  obtenerEspecialidad(){
    return this.http.get(`${this.API_URI}/usuarios/especialidad`);
  }
  eliminarDoctor(id:string){
    return this.http.delete(`${this.API_URI}/usuarios/doctor/${id}`);
  }
  guardarDoctor(persona:persona){
    return this.http.post(`${this.API_URI}/usuarios/doctor`,persona);
  }
  obtenerUnDoctor(id:string){
    return this.http.get(`${this.API_URI}/usuarios/doctor/${id}`);
  }
  obtenerUnEspecialidad(id:string){
    return this.http.get(`${this.API_URI}/usuarios/especialidad/${id}`);
  }


  actualizarDoctor(id:string|number, doctorActualizado:persona){
    return this.http.put(`${this.API_URI}/usuarios/doctor/${id}`,doctorActualizado);
  }
  buscarDoctor(nombre:string){
    return this.http.get(`${this.API_URI}/usuarios/doctor/obtener/${nombre}`);
  }
}
