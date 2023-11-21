import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BaseComponent } from './base/base.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { MenuComponent } from './componets/menu/menu.component';
import { IconsLoginComponent } from './componets/icons-login/icons-login.component';
import { MenuOptionsComponent } from './componets/menu-options/menu-options.component';
import { MenutimeComponent } from './componets/menutime/menutime.component';
import { CategoryComponent } from './componets/category/category.component';
import { CarroselComponentComponent } from './componets/carrosel-component/carrosel-component.component';
import { ImagenComponentComponent } from './componets/imagen-component/imagen-component.component';
import { MarcasComponentComponent } from './componets/marcas-component/marcas-component.component';
import { PedidosComponentComponent } from './componets/pedidos-component/pedidos-component.component';
import { InformacionComponentComponent } from './componets/informacion-component/informacion-component.component';
import { FooterComponentComponent } from './componets/footer-component/footer-component.component';


@NgModule({
  declarations: [
    BaseComponent,
    HomePageComponent,
    NavbarComponent,
    MenuComponent,
    IconsLoginComponent,
    MenuOptionsComponent,
    MenutimeComponent,
    CategoryComponent,
    CarroselComponentComponent,
    ImagenComponentComponent,
    MarcasComponentComponent,
    PedidosComponentComponent,
    InformacionComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
