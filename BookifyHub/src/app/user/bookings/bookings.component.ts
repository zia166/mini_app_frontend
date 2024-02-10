import { Component } from '@angular/core';
import { CalendarService } from 'src/app/shared/calendar.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Toast } from 'ngx-toastr';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  isLogin = false;
  updateObj: any = {
    username: '',
    email: '',
    title: '',
    booking_date: '',
    start_time: '',
    end_time: ''
  };
  public errorMsg:boolean = false;
  constructor(private calendarService: CalendarService, private toastr: ToastrService, private router: Router) { }
    updateSubmit(){
      console.log(this.updateObj);
      if(this.updateObj['booking_date'] && this.updateObj['start_time'] && this.updateObj['end_time']){
        this.errorMsg = false;
      }else{
        this.errorMsg = true;
      }

      this.calendarService.addBooking(this.updateObj).subscribe(
        (data: any) => {
          console.log(data);
          if (data['statusCode'] == 200) {
            this.toastr.success('Booking added successfully', 'Success');
            this.router.navigate(['#']);

          }else{
            this.toastr.error('Slot is already booked please choose another slot thank you', 'Error');

          }
        }
      )
    }


}
