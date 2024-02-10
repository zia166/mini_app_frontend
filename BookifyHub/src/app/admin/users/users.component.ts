import { Component } from '@angular/core';
import { CalendarService } from 'src/app/shared/calendar.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor (private calendarService: CalendarService) { }
  public count_bookings = 0;
  public count_users = 0;
  public outputArray : any = [];
  public events : any = [];
  ngOnInit(): void {
   // Assuming this is where you store your user data
    this.calendarService.getBookings().subscribe((data: any) => {
      this.count_bookings = data['total_events'];
      this.count_users = data['total_users'];
      this.outputArray = data['users'];
      this.events = data['events'];
      this.outputArray.forEach((element: any, index: any) => {
        this.events.forEach((event: any) => {
          if(element.username === event.username){
            this.outputArray[index]['title'] = event.title;
            this.outputArray[index]['status'] = event.status;
          }
        })
      });
    });
  }
    public showRemainingUsers = false;

    toggleRemainingUsers(): void {
      this.showRemainingUsers = !this.showRemainingUsers;
    }
}
