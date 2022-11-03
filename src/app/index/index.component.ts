import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public erdemjegy: number = 4;
  public szazalek: number = 78;
  public igazitas: string = "B";
  public igazitas2: string = "balra";

  public kep1:string = "/assets/bart_head.gif";
  public kep2:SafeUrl;

  constructor(private sanitizer: DomSanitizer) { 
    this.kep2 = this.sanitizer.bypassSecurityTrustUrl("https://static3.depositphotos.com/1005951/212/i/600/depositphotos_2120235-stock-photo-husky-portrait.jpg");
  }

  ngOnInit(): void {
    
  }

}
