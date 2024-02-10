import { Component , Input} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { CalendarColors } from '../calendar-utils-module/CalendarColors';
import { isSameMonth, isSameDay } from 'date-fns';
import { CalendarService } from '../calendar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUserDetailComponent } from '../Modal/modal-user-detail/modal-user-detail.component';
import { ModalFormComponent } from '../Modal/modal-form/modal-form.component';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [CalendarColors]
})

export class CalendarComponent {
 
  activeDayIsOpen = false;
  model: NgbDateStruct = { year: 2023, month: 12, day: 31 };
  showCalendarHeader: Boolean = true;
  private cdrColors = new CalendarColors();
  public events: CalendarEvent[] = [];
 
  public eventDetail: any = {};
  public view: CalendarView = CalendarView.Month;
  public viewDate: Date = new Date();
  public getAvailablityObj: any = {
    availableDateFrom: new Date(this.viewDate.getFullYear(), this.viewDate.getMonth()-1, 1).toLocaleString(),
    availableDateTo: new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 3, 0).toLocaleString()
  };
  weekStartsOn: 0 = 0;
  dragToCreateActive = false;
  @Input() viewMode: string = '';
  setDragOrResize: any;
  constructor( private calendarService: CalendarService,private modalService: NgbModal) {
    this.getEventsFromService();
  }

/******
 * Retrieves events from the service and updates the events array.
 ******/
getEventsFromService(): void {
  this.calendarService.getBookings().subscribe((data: any) => {
    const events : CalendarEvent[] =[];
    if(Array.isArray(data.events)|| data.events.length > 0) {
      data.events.forEach((event: any) => {   
        events.push({
          title: event['title'],
          start:this.fnConvertdatetoLocal(event['booking_date'],event['start_time']),
          end: this.fnConvertdatetoLocal(event['booking_date'],event['end_time']),
          color: this.cdrColors.fnGetEventColor(event['status']),
          actions: [],
          draggable: true,
        })
      })
    }
    this.events = events;

  });
}

getViewMode(): any {
    this.showCalendarHeader = false;
    if (this.viewMode == 'week') {
        return CalendarView.Week;
    } else if (this.viewMode == 'day') {
        return CalendarView.Day;
    } else if (this.viewMode == 'month') {
        return CalendarView.Month;
    }

}

fnConvertdatetoLocal(bookingDate: string, time: string): Date {
  const [hours, minutes, seconds] = time.split(":").map(Number);
  const [year, month, day] = bookingDate.split("T")[0].split("-").map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
}
weekDayClicked(data: any): void {
  
}
setView(view: CalendarView) {
  this.view = view;
}
eventClicked({ event }: { event: CalendarEvent }): void {
  const modalRef = this.modalService.open(ModalUserDetailComponent,{ size: 'md', centered: true, animation: true });
  let eventDetails = {
    title: event['title'],
    start: event['start'],
    end: event['end']
  }
  modalRef.componentInstance.eventDetails = eventDetails;
  modalRef.componentInstance.event = event;
  modalRef.closed.subscribe((data: any) => {
    if (data) {
      this.getEventsFromService();
    }
  })

}
selectToday() {
  const now = new Date();
  this.model = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
  };
}

fnCalendarHeaderDateChange(date_: Date): void {
  const newDate = new Date(date_);
  const dateString = newDate.toISOString();
  this.getAvailablityObj.availableDateFrom = new Date(newDate.getFullYear(), newDate.getMonth()-1, 1).toLocaleString();
  this.getAvailablityObj.availableDateTo = new Date(newDate.getFullYear(), newDate.getMonth() + 3, 0).toLocaleString();
  this.getEventsFromService();
}

// This Function used for Booking Form
dayClicked({date, events}: {date : Date, events: CalendarEvent[]}): void {
  const modalRef = this.modalService.open(ModalFormComponent,{ size: 'md', centered: true, animation: true });
  modalRef.componentInstance.date= date;
  modalRef.closed.subscribe((data: any) => {
    if (data) {
      this.getEventsFromService();
    }
  })  
}

changeDay(date: Date) {
  this.viewDate = date;
  this.view = CalendarView.Day;
}
openEventDetails({ event }: { event: any }): void{
  if(event.clickable){
      return;
  }
}

eventTimesChanged(data: any): void {
  this.events = this.events.map((iEvent) => {  
    return iEvent;
  });
}



}
