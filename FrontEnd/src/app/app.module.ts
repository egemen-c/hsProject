import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ButtonComponent } from './button/button.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { HomeComponent } from './home/home.component';
import { IncomingAppointmentsComponent } from './incoming-appointments/incoming-appointments.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SelectAppointmentComponent } from './select-appointment/select-appointment.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    ButtonComponent,
    DoctorComponent,
    DoctorProfileComponent,
    HomeComponent,
    IncomingAppointmentsComponent,
    LoginComponent,
    NavComponent,
    SelectAppointmentComponent,
    SelectInputComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'doctor', component:  DoctorComponent},
      {path: 'user', component:  UserComponent},
      {path: 'home', component:  HomeComponent},
      {path: 'login', component:  LoginComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }