import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HomeComponent }     from './home/home.component';
import { LoginComponent }    from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
      
      { path: '',redirectTo : '/home' , pathMatch: "full"},
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
        { path: 'dashboard', component: DashboardComponent,
           canActivate: [AuthGuard]
        },
      { path: '**',redirectTo : '/home' , pathMatch: "full"},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  // providers: [
  //   LoginService
  // ]
})
export class AppRoutingModule { }
