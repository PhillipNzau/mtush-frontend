import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import {SwiperModule} from "swiper/angular";
import { ButtonComponent } from "../shared/components/ui/button/button.component";
import { ItemCardComponent } from "../shared/components/ui/item-card/item-card.component";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SwiperModule,
        ButtonComponent,
        ItemCardComponent
    ]
})
export class DashboardModule { }
