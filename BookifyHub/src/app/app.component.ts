import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutModalComponent } from './shared/Modal/about-modal/about-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,private route: ActivatedRoute, private location: Location, private modalService: NgbModal) {}
  title = 'BookifyHub';
  isMenuActive = false;
  isInAdminRoute: boolean = false;
  ngOnInit() {
    const currentUrl = this.location.path()
    this.isInAdminRoute = currentUrl.includes('admin');
    console.log("Current URL: ", currentUrl);
    
  }
  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }
  redirectToAdmin() {
    this.isInAdminRoute = true;
    this.isMenuActive = false;
    this.router.navigate(['/admin/dashboard']);
  }

  redirectToBookings() {
    this.isInAdminRoute = true;
    this.isMenuActive = false;
    this.router.navigate(['/users/bookings']);
  }

  redirectToAbout() {
    this.isInAdminRoute = true;
    this.isMenuActive = false;
    const modalRef = this.modalService.open(AboutModalComponent , { size: 'xl' , backdrop: 'static' , keyboard: false, centered: true});
    modalRef.closed.subscribe(() => {
      this.isInAdminRoute = false;
    })
  }
}
