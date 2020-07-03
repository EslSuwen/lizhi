import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Code404Component} from './code404/code404.component';
import {LoginComponent} from './login/login.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NzBadgeModule, NzDropDownModule, NzIconModule} from 'ng-zorro-antd';
import {ModalComponent} from './modal/modal.component';
import {UpdatePasswordComponent} from './user-home/update-password/update-password.component';
import {UserInfoComponent} from './user-home/user-info/user-info.component';
import {ApplyComponent} from './user-home/apply/apply.component';
import {RecordComponent} from './user-home/record/record.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import { AuditComponent } from './user-home/audit/audit.component';
import { AuditRecordComponent } from './user-home/audit-record/audit-record.component';
import { AuthComponent } from './auth/auth.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
    LoginComponent,
    UserHomeComponent,
    ModalComponent,
    UpdatePasswordComponent,
    UserInfoComponent,
    ApplyComponent,
    RecordComponent,
    AuditComponent,
    AuditRecordComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    NzDropDownModule,
    NzBadgeModule,
    NzIconModule,
    AngularMultiSelectModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
