import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-card-producto-detalle',
  templateUrl: './card-producto-detalle.component.html',
  styleUrls: ['./card-producto-detalle.component.css']
})
export class CardProductoDetalleComponent implements OnInit, OnDestroy {
  @Input() prod:any;
  prodc:any;
  precio_=0;
  precio='';
  porcentaje='';
  relacion:any[]=[];
  title="Dejate tentar por estos deliciosos productos americanos y de Pop Food internacional"
  private sub=new Subscription();
  constructor(private _utilServices:UtilService){

  }
  ngOnDestroy() {
   this.sub.unsubscribe();
  }

  ngOnInit(){
  this.getproducto();
  this.getrelacion();
  this.sub.add( this._utilServices.product$.subscribe({ next: (prod: any | null) => {
    if(prod){
     this.prodc=prod;
     window.scroll(0,0);
     this.precio=this.prodc.precio;
    }
      }}))
  }

  getproducto(){
    let pro=this._utilServices.busqueda_produc(this.prod.producto);
    this.prodc=pro;
    this.precio=this.prodc.precio;
  }

  getrelacion(){
    this.relacion=this._utilServices.porducto_relacion();
  }

  incrementar(){
    if(this.prodc.stock==this.prodc.contador){
      return;
    }
    if(this.prodc.contador>=1 && this.prodc.contador<=2)
    {
      this.porcentaje='-5%';
      this.precio_=Number(this.prodc.precio);
      let porce=Number((this.precio_*0.05).toFixed(2));
      const pre=(this.precio_-porce).toFixed(2);
      this.precio=pre +"";
    }
    else if(this.prodc.contador>=4 && this.prodc.contador<=8)
    {
      this.porcentaje='-7%';
      this.precio_=Number(this.prodc.precio);
      let porce=Number((this.precio_*0.07).toFixed(2));
      const pre=(this.precio_-porce).toFixed(2);
      this.precio=pre +"";
    }
    else if(this.prodc.contador>=9)
    {
      this.porcentaje='-10%';
      this.precio_=Number(this.prodc.precio);
      let porce=Number((this.precio_*0.10).toFixed(2));
      const pre=(this.precio_-porce).toFixed(2);
      this.precio=pre +"";
    }
    this.prodc.contador++;
  }

  decremento(){
    if(this.prodc.contador==1){
      return;
    }
    this.prodc.contador--;
    if(this.prodc.contador<=1){
      this.porcentaje='';
      this.precio=this.prodc.precio;
    }
    else if(this.prodc.contador<=4){
      this.porcentaje='-5%';
      this.precio_=Number(this.prodc.precio);
      let porce=Number((this.precio_*0.05).toFixed(2));
      const pre=(this.precio_-porce).toFixed(2);
      this.precio=pre +"";
    }
    else if(this.prodc.contador<=9){
      this.porcentaje='-7%';
      this.precio_=Number(this.prodc.precio);
      let porce=Number((this.precio_*0.07).toFixed(2));
      const pre=(this.precio_-porce).toFixed(2);
      this.precio=pre +"";
    }

  }



}
