import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }
  doctorDetail:any

  ngOnInit() {
    this.doctorService.getAllData()
      .subscribe((data: any) => {
        console.log("Gelen Data", data)
        this.doctorDetail=data;
      })
  }
}
