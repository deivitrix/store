import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BaseComponent } from './base/base.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { MenuComponent } from './componets/menu/menu.component';
import { IconsLoginComponent } from './componets/icons-login/icons-login.component';


@NgModule({
  declarations: [
    BaseComponent,
    HomePageComponent,
    NavbarComponent,
    MenuComponent,
    IconsLoginComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
