import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import { SellItemComponent } from './components/sell-item/sell-item.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'sell', component: SellItemComponent
  },
  {path: 'item/:id', component: SelectedItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
