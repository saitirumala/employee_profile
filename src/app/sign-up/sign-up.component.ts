import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { submit,reset } from '../employee.actions';
import { StoreService } from '../Service/store.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles:[
    `
      .signUpClass{
        max-width: 50%;
        margin-left:30%;
        margin-top:100px
      }
      .text-field{
        width:100%;
        height:30px
      }
      .reg-button{
        width:100%;
        height:30px;
        background-color:#3471eb;
        margin-top:10px;
      }
      @media(max-width:600px){
        .signUpClass{
          max-width: 600px;
          padding:10px;
          margin-top:50px;
          margin-left:0px;
        };
        .text-field{
          width:100%;
          height:30px
        }
        .reg-button{
          width:100%;
          height:30px;
          background-color:#3471eb;
        }
      }
      .phone-select {
        width: 100%;
      }

      .register-are {
        margin-bottom: 8px;
      }

    `
  ]
})
export class SignUpComponent implements OnInit {
  submitData=false;

  validateForm!: FormGroup;
  constructor(private fb: FormBuilder , private store: StoreService) {}
  
  get form() { return this.validateForm.controls; }
  submitForm() {
    this.submitData=true;


    if (this.validateForm.invalid) {
      return;
    }
    console.log('submitdata', this.validateForm.value);
    this.store.signupData.next(this.validateForm.value);
    alert('Employee Registration successful..')
    window.location.replace('/login')

  }
reset(): void{

}
  updateConfirmValidator(): void {
   
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
   
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }



  ngOnInit(): void {
    
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      agree: [false]
    });
  }

}
