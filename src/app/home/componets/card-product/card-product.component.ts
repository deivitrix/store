import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {

@Input () prod:any[];


// mouseEnter(div : string){
//   console.log("mouse enter : " + div);
// }

// mouseLeave(div : string){
//  console.log('mouse leave :' + div);
// }

constructor(private router:Router, private _utiservice:UtilService){
  this.prod=[];
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

}
