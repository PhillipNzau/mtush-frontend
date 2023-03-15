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
  @Input() buttonText:string = '';
  @Input() buttonType:string = '';
  @Output() buttonClickedEvent = new EventEmitter<any>();


  buttonClicked() {
    this.buttonClickedEvent.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
 
  }
  
}
