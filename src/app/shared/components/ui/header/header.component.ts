import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'mtush-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule, ButtonComponent]
})
export class HeaderComponent {
  @Input() isMenuOpen:boolean=false;
  @Output() clickedEvent = new EventEmitter<any>()

  buttonClicked(){
    this.clickedEvent.emit();
  }


}
