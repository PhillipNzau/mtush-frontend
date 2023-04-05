import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.scss']
})
export class SellItemComponent implements OnInit{
  isMenuOpen:boolean=false;
  activeRoute:string=''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute=this.route.snapshot.url[0].path
    
  }


}
