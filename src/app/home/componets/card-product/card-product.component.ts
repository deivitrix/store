import { Subscription } from 'rxjs';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { UtilService } from 'src/app/services/prueba/util.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit{
@ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator;
@Input () prod:any[];
public pageSizeW: number = 9;
  public pageNumberW: number = 1;


// mouseEnter(div : string){
//   console.log("mouse enter : " + div);
// }

// mouseLeave(div : string){
//  console.log('mouse leave :' + div);
// }

constructor(private router:Router, private _utiservice:UtilService){
  this.prod=[];

}
  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel="Elementos -";
  }

incrementar(indice:any)
{
  if(this.prod[indice].stock==this.prod[indice].contador){
    return;
  }
  this.prod[indice].contador=this.prod[indice].contador+1;
}

descender(indice:any)
{
  if(this.prod[indice].contador==1)
  {
    return
  }
  else
  {
    this.prod[indice].contador--;
  }

}

productoDetalle(prod:any)
{
 this.router.navigateByUrl('productoDetalle/'+prod+'/0');
}

handlePageW(e: PageEvent){
  this.pageSizeW = e.pageSize;
  this.pageNumberW = e.pageIndex + 1;
}

}
