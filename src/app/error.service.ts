import { Injectable } from '@angular/core';
import { ErrorModel } from './models/error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public error: ErrorModel = new ErrorModel();

  constructor() { }

  setError(error:string) {
    this.error.message = error;
  }

  deleteError() {
    this.error.message = "";
  }

  getError():ErrorModel {
    return this.error;
  }
}

