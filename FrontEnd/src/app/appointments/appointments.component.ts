import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private appointmentService:AppointmentService) { }

  appointmentDetail:any
  ngOnInit(): void {
       this.appointmentService.getAllData()
      .subscribe((data: any) => {
        console.log("APPOINTEMNT", data)
        this.appointmentDetail=data;
      })
  }

}
