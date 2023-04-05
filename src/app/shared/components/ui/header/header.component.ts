import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { ActivatedRoute, Router,  RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'mtush-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule, ButtonComponent,  RouterLink, RouterLinkActive]
})
export class HeaderComponent implements OnInit {

  @Input() isMenuOpen:boolean=false;
  @Input() activeRoute:string ='sell';
  @Output() clickedEvent = new EventEmitter<any>();
  disableBtn:boolean=false;

  constructor(
    private route: Router,
    private currentRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute = this.currentRoute?.snapshot?.url[0]?.path
    if (this.activeRoute === 'sell') {
      this.disableBtn = true
    }   
    
  }

  buttonClicked(){    
    this.clickedEvent.emit();
    
  }
  navigate() {
    this.route.navigate(['/sell']);
  }


}
