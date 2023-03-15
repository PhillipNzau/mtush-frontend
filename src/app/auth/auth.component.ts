import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import { ButtonComponent } from "../shared/components/ui/button/button.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    imports: [CommonModule, RouterLink, ButtonComponent]
})
export class AuthComponent {
  login: boolean= false;
  viewPwd: boolean= false;

}
