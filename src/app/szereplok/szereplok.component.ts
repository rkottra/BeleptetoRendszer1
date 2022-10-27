import { Component, OnInit } from '@angular/core';
import { StarwarsModel } from '../models/starwars.model';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-szereplok',
  templateUrl: './szereplok.component.html',
  styleUrls: ['./szereplok.component.css']
})
export class SzereplokComponent implements OnInit {

  public szereplok:StarwarsModel[] = [];

  constructor(private starwarsszerviz:StarwarsService) { 
    this.starwarsszerviz.getAllSzereplo().subscribe(
      (data:StarwarsModel[]) => {
        this.szereplok = data;
      }
    );
  }

  ngOnInit(): void {
    
  }

}
