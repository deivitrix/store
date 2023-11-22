import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BaseAuthComponent } from './base-auth/base-auth.component';
import { LoginComponentComponent } from './pages/login-component/login-component.component';
import { HomeModule } from '../home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BaseAuthComponent,
    LoginComponentComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
