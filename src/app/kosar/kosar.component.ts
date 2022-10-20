import { Component, OnInit } from '@angular/core';
import { KosarService } from '../kosar.service';
import { TermekModel } from '../models/termek.model';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent implements OnInit {

  public termekek: TermekModel[] = [];

  constructor(public kosarszerviz:KosarService) { 
    this.termekek = this.kosarszerviz.Lekerdezes();
  }

  ngOnInit(): void {
    
  }

}
