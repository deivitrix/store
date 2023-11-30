import { Subscription } from 'rxjs';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UtilService } from 'src/app/services/prueba/util.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit, OnChanges {

  texto="";
  id='';

  constructor(private rutaActiva: ActivatedRoute,){
    this.texto=rutaActiva.snapshot.params['producto'];
    this.id=rutaActiva.snapshot.params['id'];
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }
}
