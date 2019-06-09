import { Injectable } from '@angular/core';
import { paciente } from '../models/paciente';
import { HttpClient } from '@angular/common/http'; //peticiones http
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  API_URI=`http://localhost:3400/api`;
  constructor(private http: HttpClient) { }
  
  guardarPaciente(paciente:paciente){
    return this.http.post(`${this.API_URI}/usuarios/paciente`,paciente);
  }
  obtenerPaciente(){
    return this.http.get(`${this.API_URI}/usuarios/paciente`);
  }
  obtenerUnPaciente(id:string){
    return this.http.get(`${this.API_URI}/usuarios/paciente/${id}`);
  }
  actualizarPaciente(id:string|number, pacienteActualizado:paciente){
    return this.http.put(`${this.API_URI}/usuarios/paciente/${id}`,pacienteActualizado);
  }
  eliminarPaciente(id:string){
    return this.http.delete(`${this.API_URI}/usuarios/paciente/${id}`);
  }
  buscarPaciente(nombre:string){
    return this.http.get(`${this.API_URI}/usuarios/paciente/obtener/${nombre}`);
  }
}
