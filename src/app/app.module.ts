import { NgModule, Sanitizer } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { LablecComponent } from './lablec/lablec.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { TermekComponent } from './termek/termekReszletes.component';
import { KategoriakComponent } from './kategoriak/kategoriak.component';
import { ElerhetosegekComponent } from './elerhetosegek/elerhetosegek.component';
import { RouterModule } from '@angular/router';
import { TermekEgyszeruComponent } from './termek/termekEgyszeru.component';
import { KosarComponent } from './kosar/kosar.component';
import { KosarService } from './kosar.service';
import { SzereplokComponent } from './szereplok/szereplok.component';
import { StarwarsService } from './starwars.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error.service';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    LablecComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    TermekComponent,
    TermekEgyszeruComponent,
    KategoriakComponent,
    ElerhetosegekComponent,
    KosarComponent,
    SzereplokComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    KosarService, StarwarsService, ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
