import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css']
})
export class MenuOptionsComponent implements OnInit{

  //Variables
  menu:any[]=[];

  constructor(private _utilServices:UtilService){

  }

  ngOnInit(){
  this.menu_option();
  }

  menu_option(){
    this.menu=this._utilServices.menu_option();
  }





}
