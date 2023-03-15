import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mtush-brand-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-button.component.html',
  styleUrls: ['./brand-button.component.scss']
})
export class BrandButtonComponent {
  @Input() buttonText:string='';
  @Output() buttonClickedEvent = new EventEmitter<any>();

  buttonClicked() {
    this.buttonClickedEvent.emit();
  }
}
