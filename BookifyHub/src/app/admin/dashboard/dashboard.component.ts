import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) { }
  activeNavItem = 'dashboard';
  isSidebarReduced = false;


  setActiveNavItem(navItem: string): void {
    this.activeNavItem = navItem;
  }
 
  toggleSidebar(): void {
    this.isSidebarReduced = !this.isSidebarReduced;
  }
}