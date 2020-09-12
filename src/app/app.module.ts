import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Code404Component} from './code404/code404.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ModalComponent} from './modal/modal.component';
import { AuthComponent } from './auth/auth.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
    UserHomeComponent,
    ModalComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
