import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KategoriakComponent } from '../kategoriak/kategoriak.component';
import { TermekModel } from '../models/termek.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-termekegyszeru',
  templateUrl: './termekEgyszeru.component.html',
  styleUrls: ['./termekEgyszeru.component.css']
})
export class TermekEgyszeruComponent implements OnInit {
  
  @Input() termek:TermekModel = new TermekModel();
  @Input() kedvezmeny:number = 0;
  @Output() kosarbaEsemeny = new EventEmitter<TermekModel>();

  constructor(  ) { }

  ngOnInit(): void {
  }

  kosarba() {
    this.kosarbaEsemeny.emit(this.termek);
  }

}
