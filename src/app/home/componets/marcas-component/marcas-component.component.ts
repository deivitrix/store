import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-marcas-component',
  templateUrl: './marcas-component.component.html',
  styleUrls: ['./marcas-component.component.css']
})
export class MarcasComponentComponent implements OnInit {

  marcas_item:any[]=[];

  constructor(private _utilService:UtilService){
  }

  ngOnInit(){
    this.marca();
  }

  marca (){
   this.marcas_item=this._utilService.marcas();
  }



}
