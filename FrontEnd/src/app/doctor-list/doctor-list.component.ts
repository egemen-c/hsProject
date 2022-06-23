import { Component, OnInit } from '@angular/core';
import { AllDoctorService } from '../services/all-doctors.service';
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors:any;
  
  constructor(private allDoctorService:AllDoctorService) {}
  
  ngOnInit() {
      this.allDoctorService.getPosts()
        .subscribe(response => {
          this.doctors = response;
          console.log(this.doctors);
        });
  }

}
