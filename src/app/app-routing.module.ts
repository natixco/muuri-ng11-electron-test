import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Grid1Component } from './components/grid1/grid1.component';
import { Grid2Component } from './components/grid2/grid2.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'grid1',
    component: Grid1Component
  },
  {
    path: 'grid2',
    component: Grid2Component
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
