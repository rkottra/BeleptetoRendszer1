import { Injectable } from '@angular/core';
import { TermekModel } from './models/termek.model';

@Injectable({
  providedIn: 'root'
})
export class KosarService {

  public kosarbelitermekek:TermekModel[] = [];

  constructor() { 

  }

  public Hozzaad(ujTermek:TermekModel, kedvezmeny:number=0) {
      
      let seged = new TermekModel();
      seged.nev = ujTermek.nev;
      seged.ar = ujTermek.ar*(100-kedvezmeny)/100;
      seged.leiras = ujTermek.leiras;


    /*if (this.kosarbelitermekek.find(t=>t.nev == ujTermek.nev) == null) {*/
      this.kosarbelitermekek.push(seged);
    //}
  }

  public Lekerdezes():TermekModel[] {
    return this.kosarbelitermekek;
  }
}
