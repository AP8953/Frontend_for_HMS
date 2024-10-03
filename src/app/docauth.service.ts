import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

    authenticate(username:string,password:string){
        
      if(username=="root"&&password=="root"){

        sessionStorage.setItem('username',username);
        return true;
      }else{
        return false;
      }
    }

    isUserLoggedIn(){
  
      console.log("doctor logged in")
      let user=sessionStorage.getItem('username');
      console.log(user)
      return !(user==null)

    }

    logout(){

      console.log("doctor logged out")

      sessionStorage.removeItem('username');
    }
}