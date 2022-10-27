import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KosarService } from '../kosar.service';
import { TermekModel } from '../models/termek.model';

@Component({
  selector: 'app-kategoriak',
  templateUrl: './kategoriak.component.html',
  styleUrls: ['./kategoriak.component.css']
})
export class KategoriakComponent implements OnInit {

  public kedvezmeny:number = 10;
  public termekek: TermekModel[] = [
    {
      nev: "Banán",
      leiras: "",
      ar: 100
    },
    {
      nev: "Alma",
      leiras: "Szép piros almák",
      ar: 50
    },
    {
      nev: "Szilva",
      leiras: "",
      ar: 80
    },
    {
      nev: "Szőlő",
      leiras: "",
      ar: 120
    }
  ];

  constructor(private kosarszerviz:KosarService) { }

  ngOnInit(): void {
  }

  UjTermekKosarba(UjTermek:TermekModel) {
    this.kosarszerviz.Hozzaad(UjTermek, this.kedvezmeny);
  }
}
