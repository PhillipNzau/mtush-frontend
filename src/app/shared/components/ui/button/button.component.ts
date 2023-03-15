import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';


@Component({
  standalone: true,
  selector: 'mtush-button',
  templateUrl: './button.component.html',
  imports: [CommonModule],
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnChanges {
  @Input() buttonLabel:string = '';
  @Input() buttonType:string = '';
  @Output() buttonClickedEvent = new EventEmitter<any>();
  isAuth: boolean = false;  
  isLanding: boolean = false;

  buttonClicked() {
    this.buttonClickedEvent.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['buttonType'].currentValue === 'auth') {
      this.isAuth = true;
    }
    if(changes['buttonType'].currentValue === 'landing') {
      this.isLanding = true;
    }
  }
  
}
