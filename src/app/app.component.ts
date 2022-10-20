import { Component } from '@angular/core';
import { TermekModel } from './models/termek.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public kosartartalma: TermekModel[] = [];

  title = 'BeleptetoRendszer1';
}
