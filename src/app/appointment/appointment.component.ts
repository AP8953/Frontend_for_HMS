import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  constructor(private appointmentService: AppointmentService, private router:Router, private adminauthService:AdminauthService) { }
  

  appointments:Appointment[]=[];

  

  ngOnInit():void{
    this.getAppointments();
  }
  getAppointments(){
    this.appointmentService.getAllApointment().subscribe(data=>{
      this.appointments=data;
    })
}

delete(id:number){
  this.appointmentService.deleteAppointment(id).subscribe(data=>{
    console.log(data);
    this.getAppointments();
  })
}

logout(){
  this.adminauthService.logout();
  this.router.navigate(['home'])
}
}
