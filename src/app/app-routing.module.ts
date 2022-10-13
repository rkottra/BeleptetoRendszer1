import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElerhetosegekComponent } from './elerhetosegek/elerhetosegek.component';
import { IndexComponent } from './index/index.component';
import { KategoriakComponent } from './kategoriak/kategoriak.component';
import { TermekComponent } from './termek/termek.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "termek/:termeknev",
    component: TermekComponent
  },
  {
    path: "kategoriak",
    component: KategoriakComponent
  },
  {
    path: "elerhetosegek",
    component: ElerhetosegekComponent
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
