import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComingSoonComponent} from "./shared/components/coming-soon/coming-soon.component";
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', component:ComingSoonComponent
  },
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
