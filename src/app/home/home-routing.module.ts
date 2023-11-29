import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VentaspagesComponent } from './pages/ventaspages/ventaspages.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { DulcePageComponent } from './pages/dulce-page/dulce-page.component';
import { SaladoPageComponent } from './pages/salado-page/salado-page.component';
import { BebidaPageComponent } from './pages/bebida-page/bebida-page.component';
import { HalloweenPageComponent } from './pages/halloween-page/halloween-page.component';
import { BlackPageComponent } from './pages/black-page/black-page.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';

const routes: Routes = [
  {
    path:'',
    component:BaseComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component:HomePageComponent
      },
      {
        path:'new',
        component:NewPageComponent
      },
      {
        path:'productoDetalle/:producto/:id',
        component:ProductoDetalleComponent
      },
      {
        path:'ventas',
        component:VentaspagesComponent
      },
      {
        path:'dulce',
        component:DulcePageComponent
      },
      {
        path:'salado',
        component:SaladoPageComponent
      },
      {
        path:'bebidas',
        component:BebidaPageComponent
      },
      {
        path:'halloween',
        component:HalloweenPageComponent
      },
      {
        path:'black',
        component:BlackPageComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
