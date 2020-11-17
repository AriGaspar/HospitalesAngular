import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hospital } from '../models/hospital.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  h:hospital;
  h2:hospital;
  h3:hospital;
  h4:hospital;
  h5:hospital;
  h6:hospital;
  h7:hospital;
  h8:hospital;

  hospitales:hospital[]=[];//Este es un array con los objetos hospitales (nombre, ubicacion y todo eso)

  hospital_data:any[]=null;//Lista de hospitales que coiciden con el "termino" buscado
  
  termino_url:string;//termino de la palabra buscada

  constructor(private router:Router,
              private _router:ActivatedRoute) {

    _router.params.subscribe(params=>{
      this.termino_url=params['word']; 
      console.log(this.termino_url);

      // for(let i=0;i<this.llenandoDatos.length;i++){
      //   let s=this.llenandoDatos[i].nombre.includes(this.termino_url);
      //   if(!s) continue;
      //   this.hospital_data.push(this.llenandoDatos[i]);
      //   console.log(this.llenandoDatos[i]);
      // }
      let _data = this.llenandoDatos.filter(h => h.nombre.toLowerCase().includes(this.termino_url.toLowerCase())); 
      this.hospital_data=_data;
      console.log("Datos array: "+this.hospital_data);
    });
  }
  get llenandoDatos(){
    this.h={nombre:"Santa maria",lugar:"CAlle 2",pacientes:23,activo:false};
    this.h2={nombre:"maria Santa",lugar:"CAlle 11",pacientes:43,activo:true};
    this.h3={nombre:"papipu",lugar:"CAlle 76",pacientes:43,activo:true};
    this.h4={nombre:"kicturtcu",lugar:"CAlle 45",pacientes:43,activo:true};
    this.h5={nombre:"kicashsrutcu",lugar:"CAlle 45",pacientes:43,activo:true};
    this.h6={nombre:"kicturashscu",lugar:"CAlle 45",pacientes:43,activo:true};
    this.h7={nombre:"kicashsutrcu",lugar:"CAlle 45",pacientes:43,activo:true};
    this.h8={nombre:"kictutcashs",lugar:"CAlle 45",pacientes:43,activo:true};
    return this.hospitales=[this.h,this.h2,this.h3,this.h4,this.h5,this.h6,this.h7,this.h8];//aniadiendo objetos 'hospital' de prueba
  }

  terminoFormateado(termino:string){
    let vocalesEsp=['á','é','í','ó','ú', 'Á','É','Í','Ó','Ú'];
    let vocales=['a','e','i','o','u', 'A','E','I','O','U'];
    let terminosFormateados=termino;

    for(let i=0;i<vocalesEsp.length;i++){
      if(termino.includes(vocalesEsp[i])){
        terminosFormateados=termino.replace(/vocalesEsp[i]/gi,vocales[i]);
      }
    }
        
    return terminosFormateados;
  }
  
  

}
