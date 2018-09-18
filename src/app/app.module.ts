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
import { CreateTestComponent } from './test/create-test/create-test.component';
import { UpdateTestComponent } from './test/update-test/update-test.component';
import {DetailsTestResolver} from './guards/detailsTestResolver';
import { ListTestComponent } from './test/list-test/list-test.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ControlErrorsComponent,
    ModalErrosComponent,
    DashboardComponent,
    CreateTestComponent,
    UpdateTestComponent,
    ListTestComponent
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatDatepickerModule,
    // Material
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
    // end
    
  ],
  providers: [

    AuthenticationService,
    User, 
    AuthGuard,
    DetailsTestResolver,
    MatDatepickerModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
