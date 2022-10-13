import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FejlecComponent } from './fejlec/fejlec.component';
import { LablecComponent } from './lablec/lablec.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { TermekComponent } from './termek/termek.component';
import { KategoriakComponent } from './kategoriak/kategoriak.component';
import { ElerhetosegekComponent } from './elerhetosegek/elerhetosegek.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FejlecComponent,
    LablecComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    TermekComponent,
    KategoriakComponent,
    ElerhetosegekComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
