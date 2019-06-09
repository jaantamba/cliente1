import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ventana',
  templateUrl: './login-ventana.component.html',
  styleUrls: ['./login-ventana.component.css']
})
export class LoginVentanaComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  ingresar(){
    console.log("Entro");
    
    this.router.navigate(['/personas/enfermera/todos'])
  }

}
