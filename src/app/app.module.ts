import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ControlErrorsComponent } from './shared/control-errors/control-errors.component';
import { ModalErrosComponent } from './shared/modal-erros/modal-erros.component';

import {AuthenticationService} from './service/authentication.service';
import { HttpModule } from '@angular/Http';
import { HttpClientModule } from '@angular/common/http';
import { User } from './entity/user';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { TestResolver } from './guards/testResolver.resolver';

// import { TestResolver } from './guards/testResolver.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ControlErrorsComponent,
    ModalErrosComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService,
              User, 
              AuthGuard,
              TestResolver
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
