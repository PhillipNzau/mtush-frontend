import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss']
})
export class SelectedItemComponent implements OnInit {
  isMenuOpen:boolean=false;
  activeRoute:string='';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute=this.route?.snapshot?.url[0]?.path;
    
    
  }

  menuOpen() {
    this.isMenuOpen = !this.isMenuOpen
  }

}
