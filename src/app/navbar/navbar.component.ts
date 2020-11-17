import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public router:Router) { }

  evaluar(){//Este metodo es para redirigir al usuario a la pagina "search" al presionar ENTER 
    var input = document.getElementById("s-inpt");
    var button = document.getElementById("s-btn");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {//Si la tecla que presiono es enter?:tonces mami
        event.preventDefault();
        button.click();
      }
    });
    
  }

  redirigir(termino:string){
    this.router.navigateByUrl("/search/"+termino);
  } 
}
