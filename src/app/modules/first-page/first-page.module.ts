import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { FirstPageFirstPartComponent } from './components/first-page-first-part/first-page-first-part.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FirstPageSecondPartComponent } from './components/first-page-second-part/first-page-second-part.component';

@NgModule({
  declarations: [FirstPageComponent, FirstPageFirstPartComponent, FirstPageSecondPartComponent],
  imports: [
    CommonModule,
    FirstPageRoutingModule,
    MatSidenavModule
  ]
})
export class FirstPageModule { }
