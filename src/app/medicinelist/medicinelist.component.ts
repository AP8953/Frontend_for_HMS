import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {
  
  logout(){
    this.docauth.logout();
    this.router.navigate(['home'])
  }
  
  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService, private router:Router, private docauth:DocauthService){

  }
  ngOnInit():void{
    this.getMedicine();
  }
  getMedicine(){
    this.medicineService.getMedicine().subscribe(data => {
      this.medicines=data;
  })
}

update(id: number) {
  this.router.navigate(['update-medicine',id])
  }

  delete(id:number){
    this.medicineService.delete(id).subscribe(data=>{
      console.log(data);
      this.getMedicine();
    })
  }
}
