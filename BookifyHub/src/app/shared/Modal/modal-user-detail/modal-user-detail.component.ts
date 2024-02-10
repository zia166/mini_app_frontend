import { Component, Input, ɵɵqueryRefresh } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from 'angular-calendar';
import { CalendarService } from 'src/app/shared/calendar.service';


@Component({
  selector: 'app-modal-user-detail',
  templateUrl: './modal-user-detail.component.html',
  styleUrls: ['./modal-user-detail.component.css']
})
export class ModalUserDetailComponent {
  @Input() event: CalendarEvent | undefined;
  @Input() eventDetails: any;
  public eventArray: any[] = [];
  constructor(public activeModal: NgbActiveModal, private calendarService: CalendarService) { 

  }
   ngOnInit() {
     console.log(this.eventDetails);
     this.getBookingDetails();
    }
    getBookingDetails(){
      this.calendarService.getEventDetails(this.eventDetails).subscribe((data: any) => {
        console.log(data);
        if(data['statusCode'] == 200){
          data['data'].forEach((element: any) => {
            this.eventArray.push(element);
          });
        }
      })
  }
  deleteEvent(event: any){
    console.log(event);
      this.calendarService.deleteEvent(event).subscribe((data: any) => {
       if (data['statusCode'] == 200) {
        this.activeModal.close('Close click');
       }
        
      })
  }
  completeEvent(event: any){
    console.log(event);
    this.calendarService.updateEvent(event).subscribe((data: any) => {
     if (data['statusCode'] == 200) {
      this.activeModal.close('Close click');
     }
      
    })
  }

  }
  
