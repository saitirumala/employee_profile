import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  public isAuthenticated: boolean;
  constructor() { 
  localStorage.clear()
  }

  ngOnInit(): void {
   
    const authKey=localStorage.getItem('authKey')
    console.log('authKey',authKey)
    if(authKey==='true'){
      this.isAuthenticated = true;
    }else{
      this.isAuthenticated = false;
      window.location.replace('/login')
    }
  }

}
