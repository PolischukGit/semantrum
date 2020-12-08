import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { FirstPageFirstPartComponent } from './components/first-page-first-part/first-page-first-part.component';
import { FirstPageSecondPartComponent } from './components/first-page-second-part/first-page-second-part.component';
import { FirstPageResolver } from '../../resolvers/first-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent,
    children: [
      {
        path: '1',
        component: FirstPageFirstPartComponent,
        resolve: {
          data: FirstPageResolver,
        },
      },
      {
        path: '2',
        component: FirstPageSecondPartComponent
      },
      {
        path: '**',
        redirectTo: '1',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPageRoutingModule { }
