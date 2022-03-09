import { Component, OnInit } from '@angular/core';
import { egretAnimations } from './../../../shared/animations/egret-animations';
import { ThemeService } from './../../../shared/services/theme.service';
import tinyColor from 'tinycolor2';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { NavigationService } from '../../../shared/services/navigation.service';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default-dashboard.component.html',
  styleUrls: ['./default-dashboard.component.scss'],
  animations: egretAnimations
})
export class DefaultDashboardComponent implements OnInit {
public menuItems: any[];
 counts:any;
  constructor(
    private themeService: ThemeService,
    private auth:AuthService,
    private navService: NavigationService,
    
  ) {

  }

  ngOnInit() {  

   this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;
    });
  }



}
