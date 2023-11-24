import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css'],
})
export class NewPageComponent implements OnInit {
  //variables
  isForm = false;
  isprecio=false;
  isOrder=false;
  prod:any[]=[];

  constructor(private _utilService:UtilService)
  {

  }

  ngOnInit() {
      this.producto();
  }


  setForm() {
    if (this.isForm) this.isForm = false;
    else this.isForm = true;
  }

  setPrecio(){
    if (this.isprecio) this.isprecio = false;
    else this.isprecio = true;
  }

  producto(){
   this.prod=this._utilService.productos_new();
  }
}
