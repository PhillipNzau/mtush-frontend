import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItemCard } from 'src/app/shared/models/item-card';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'mtush-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item:ItemCard | undefined;

}
