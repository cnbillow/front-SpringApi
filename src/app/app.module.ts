import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ControlErrorsComponent } from './shared/control-errors/control-errors.component';

import {AuthenticationService} from './service/authentication.service';
import { HttpModule } from '@angular/Http';
import { HttpClientModule } from '@angular/common/http';
import { User } from './entity/user';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ControlErrorsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
