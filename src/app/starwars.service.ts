import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StarwarsModel } from './models/starwars.model';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { 
  }

  public getAllSzereplo() : Observable<StarwarsModel[]> {
    //return this.http.get<StarwarsModel[]>("http://localhost:3000/people");
    
    return this.http.get("http://localhost:3000/people").pipe(map((data:any)=> {
      let seged:StarwarsModel[] = [];

      for (let index = 0; index < data.length; index++) {
        seged.push({
          nev: data[index].name,
          height: data[index].height,
          mass: data[index].mass,
          skin_color: data[index].skin_color,
          hair_color: data[index].hair_color
        });
      }
      return seged;
    }));
  }
}
