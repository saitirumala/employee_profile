import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, } from '@angular/forms';
import { StoreService } from '../Service/store.service';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styles:[` .login-form {
    max-width: 30%;
    padding:10px;
    margin-left:35%;
  }
  @media(max-width:600px){
    .login-form {
      max-width: 300px;
      padding:10px;
      margin-left:0px;
    }
  }
  .text-field{
    width: 91%;
    height:30px;
  }
  .login-form-margin {
    margin-bottom: 16px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
    height:30px;
    background-color:#3471eb;
  }`]
})
export class LoginComponent implements OnInit {
  loginData=false;
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder , private store: StoreService) {}


  get form() { return this.validateForm.controls; }
  submitForm() {
    this.loginData=true;
    if (this.validateForm.invalid) {
   
      return;
    }
    if(this.validateForm.value.userName==='sai'&& this.validateForm.value.password==='sai@123' ){
      alert('Login Successfully')
      localStorage.setItem('authKey','true');
      window.location.replace('/home')
    }else{
      alert('The given login details are Invalid')
      window.location.reload()
    }
    console.log('login_data', this.validateForm.value);
    this.store.loginData.next(this.validateForm.value);

  }
 

  ngOnInit(): void {
   
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
