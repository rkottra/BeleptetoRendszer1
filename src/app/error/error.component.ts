import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error.service';
import { ErrorModel } from '../models/error.model';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public error: ErrorModel;

  constructor(private errorszerviz:ErrorService) { 
    this.error = this.errorszerviz.getError();
  }

  ngOnInit(): void {
    
  }

}
