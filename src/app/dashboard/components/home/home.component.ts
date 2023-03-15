import { Component, OnInit } from '@angular/core';
import { ItemCard } from 'src/app/shared/models/item-card';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items:ItemCard[] = [
    {
      id:1,
      price:240,
      brand: 'Nike',
      size: 'XL',
      location: 'Kenya, Nairobi',
      liked: true,
      numberOfLikes: 2,
    },
    {
      id:2,
      price:300,
      brand: 'Adidas',
      size: 'L',
      location: 'Kenya, Nairobi',
      liked: false,
      numberOfLikes: 7,
    }
  ];  
  brands: string[] = ['Nike', 'Adidas', 'Ralph Lauren', 'New Balance', 'Puma', 'Vans', 'Burberry', 'Tommy Hilfiger', 'Reebok'];
  isMenuOpen:boolean=false;
  

  constructor() { }
  ngOnInit(): void {
    
  }
  menuOpen() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
