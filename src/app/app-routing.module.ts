import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElerhetosegekComponent } from './elerhetosegek/elerhetosegek.component';
import { IndexComponent } from './index/index.component';
import { KategoriakComponent } from './kategoriak/kategoriak.component';
import { SzereplokComponent } from './szereplok/szereplok.component';
import { TermekComponent } from './termek/termekReszletes.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "index",
    pathMatch:"full"
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "termek/:termeknev",
    component: TermekComponent
  },
  {
    path: "kategoriak",
    component: KategoriakComponent,
  },
  {
    path: "elerhetosegek",
    component: ElerhetosegekComponent
  },
  {
    path: "szereplok",
    component: SzereplokComponent
  },
  {
    path: "**",
    component: IndexComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
