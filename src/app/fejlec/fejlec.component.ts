import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fejlec',
  templateUrl: './fejlec.component.html',
  styleUrls: ['./fejlec.component.css']
})
export class FejlecComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  kattint() {
    this.router.navigate(['index']);
  }
}
