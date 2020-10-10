import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public signupData: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public loginData:BehaviorSubject<any> = new BehaviorSubject<any>('');

  
}
