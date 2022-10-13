import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KategoriakComponent } from '../kategoriak/kategoriak.component';
import { TermekModel } from '../models/termek.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-termek',
  templateUrl: './termek.component.html',
  styleUrls: ['./termek.component.css']
})
export class TermekComponent implements OnInit {
  
  public termek:TermekModel = new TermekModel();

  constructor(  private route: ActivatedRoute, private location:Location) { 

    this.termek = (this.location.getState()) as TermekModel;
/*
    this.route.params.subscribe((params) => {
      this.termek.nev = params["termeknev"];
      let kc :KategoriakComponent = new KategoriakComponent();
      this.termek = kc.termekek.filter(x=>x.nev == this.termek.nev)[0];

    });
*/

  }

  ngOnInit(): void {
  }

}
