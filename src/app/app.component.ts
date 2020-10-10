import { Component,OnInit } from '@angular/core';

import { StoreService } from './Service/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'Employee Profile';
  public isAuthenticated: boolean;
  public isLoginClick: boolean;

  constructor(private store: StoreService) {
    this.isAuthenticated = false;
    this.isLoginClick=true;
    
    const authKey=localStorage.getItem('authKey')
    if(authKey==='true'){
      
      this.isAuthenticated = true;
      this.isLoginClick=false;

    }else{
      this.isAuthenticated = false;
      // window.location.replace('/login')
    }
  }
  ngOnInit():void{

    this.store.signupData.subscribe((data: any) => {
      if (data != '') {
        console.log('signupData',data);
      }
    });
    this.store.loginData.subscribe((data: any) => {
      if (data != '') {
        console.log('loginData',data);
      }
    })
  }
  login() {
    
  }

  logout() {
  localStorage.clear()
  alert('Logout Successfully')
  window.location.reload()
  }
}