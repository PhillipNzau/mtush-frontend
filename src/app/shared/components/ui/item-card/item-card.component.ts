import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ItemCard } from 'src/app/shared/models/item-card';

@Component({
  standalone: true,
  imports: [CommonModule,  RouterLink, RouterLinkActive],
  selector: 'mtush-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item:ItemCard | undefined;

}
