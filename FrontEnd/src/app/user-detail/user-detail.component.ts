import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
  
 
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService) { }

  userDetail:any

  ngOnInit() {
    this.userService.getAllData()
      .subscribe(data => {
        console.log("Gelen Data", data)
        this.userDetail=data;
      })
  }
}
