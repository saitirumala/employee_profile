import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isAuthenticated: boolean;
  constructor() { }

  ngOnInit(): void {
    const authKey=localStorage.getItem('authKey')
    if(authKey==='true'){
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
      window.location.replace('/login')
    }
    console.log('path',window.location.pathname)
  }


}
