import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
 ]

@Injectable({
  providedIn: 'root'
})

 
export class AllDoctorService {

  private url = 'http://172.16.88.37:8080/api/user/getAllDoctors';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
}

