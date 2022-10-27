import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menupontok = [
    {
      title: "Nyitóoldal", 
      link: "", 
    },
    {
      title: "Kategóriák",
      link: "kategoriak", 
    },
    {
      title: "Elérhetőségek",
      link: "elerhetosegek", 
    },
    {
      title: "Star wars szereplők",
      link: "szereplok", 
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
