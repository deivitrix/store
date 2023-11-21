import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-imagen-component',
  templateUrl: './imagen-component.component.html',
  styleUrls: ['./imagen-component.component.css']
})
export class ImagenComponentComponent implements OnInit {

  //variables
  imagen:any[]=[];



  constructor(
    private _utilService:UtilService
  ){
    }

  ngOnInit() {
    this.imagen_void();

  }

  imagen_void(){
   this.imagen=this._utilService.imagenes_home();
  }




}
