import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Code404Component} from './code404/code404.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  {
    path: '', // 默认路由
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {path: 'auth', component: AuthComponent},
  // canActivate: [CanActivateAuthGuard],
  {
    path: 'home', component: UserHomeComponent,
    children: [
      {path: '**', component: Code404Component}
    ],
  },
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
