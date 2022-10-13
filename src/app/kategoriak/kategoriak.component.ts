import { Component, OnInit } from '@angular/core';
import { TermekModel } from '../models/termek.model';

@Component({
  selector: 'app-kategoriak',
  templateUrl: './kategoriak.component.html',
  styleUrls: ['./kategoriak.component.css']
})
export class KategoriakComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
