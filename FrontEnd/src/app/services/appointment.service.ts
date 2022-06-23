import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';



interface Appointment {
  
    userId: bigint,
    cityName: string,
    hospitalName: string,
    departmentName: string,
    doctorName: string,
    description: string,
}

imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 ]

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  constructor(private http: HttpClient) { }
  private baseURL = `http://172.16.88.34:8090` 


  getAllData(): Observable<Appointment> {
   return this.http.get<Appointment>(`${this.baseURL}/pia/appointment/123456498`)
}
}
