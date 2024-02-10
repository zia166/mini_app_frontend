import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private url = 'http://127.0.0.1:8000/admin/';

  constructor( private http: HttpClient) { }

  getBookings(): Observable<CalendarEvent[]> {
    console.log("service");
    return this.http.get<CalendarEvent[]>(this.url+'events/');
  }

  addBooking(booking: CalendarEvent): Observable<CalendarEvent> {
    return this.http.post<CalendarEvent>(this.url+'events/', booking);
  }

  getEventDetails(eventDetails: any): Observable<object> {
    return this.http.get(this.url+'event_details/', {params : eventDetails});
  }
  deleteEvent(eventDetails: any): Observable<object> {
    return this.http.delete(this.url+'events/', {params : eventDetails});
  }
  updateEvent(eventDetails: any): Observable<any> {
    return this.http.patch(this.url+'event_details/',{'_id': eventDetails});
  }
}
