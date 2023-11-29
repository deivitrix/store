import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-product-relacion',
  templateUrl: './product-relacion.component.html',
  styleUrls: ['./product-relacion.component.css']
})
export class ProductRelacionComponent implements OnInit {

  @Input() prod!:any[];
  @Input() title:any;
  ngOnInit() {
  }

  constructor(private router:Router, private _utiservices:UtilService){

  }

  detalleprod(prod:any){
    this._utiservices.setProduct(prod);
    // this.router.navigateByUrl('productoDetalle/'+prod+'/1');
  }

}
