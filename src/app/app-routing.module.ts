import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import {ComingSoonComponent} from "./shared/components/coming-soon/coming-soon.component";
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'coming-soon', component:ComingSoonComponent
  },
  {
    path: 'login', component:AuthComponent
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {
    path: '404', component:NotFoundComponent
  },
  {
    path: '**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
