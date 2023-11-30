import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/prueba/util.service';

@Component({
  selector: 'app-page-product-detalle',
  templateUrl: './page-product-detalle.component.html',
  styleUrls: ['./page-product-detalle.component.css']
})
export class PageProductDetalleComponent implements OnInit {
  prod!:any;
  id!:any;
  @Input() texto:any;

  relacion:any[]=[];
  relacion1:any[]=[];
  title="Dejate tentar por estos deliciosos productos americanos y de Pop Food internacional"
  title1="Venga, a por ellos..... ¡Te lo mereces!";
  // mostrar=false;


  constructor(private _utilservice:UtilService,private rutaActiva: ActivatedRoute,){
    // this.texto=rutaActiva.snapshot.params['producto'];
    // console.log(this.id);

  }


  ngOnInit(): void {
    this.getproducto();
    this.getrelacion();
    this.getrelacion1();
  }

  getproducto(){
    this.prod=this._utilservice.busqueda_produc(this.texto);
  }
  getrelacion(){
    this.relacion=this._utilservice.porducto_relacion();
  }
  getrelacion1(){
    this.relacion1=this._utilservice.producto_relacion1();
    console.log(this.relacion1);

  }


}
