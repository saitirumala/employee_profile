import { createReducer, on } from '@ngrx/store';
import {submit,reset} from './employee.actions';
export const initialState = '';

const _employeeReducer = createReducer(
    initialState,
    on(submit, (state) => state ),
   
    on(reset, (state) => '')
  );
  export function employeeReducer(state, action) {
    console.log('store',_employeeReducer(state, action))
    return _employeeReducer(state, action);
  }