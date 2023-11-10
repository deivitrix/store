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
    CarroselComponentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
