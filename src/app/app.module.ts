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
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/Http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ControlErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
