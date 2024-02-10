import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'mwl-calendar-header',
  template: `
    <div class="row text-center  pt-4 pl-3" >
      <div class="col-md-4 text-left p-0">
        <div class="btn-group">
          <div
            class="btn btn-secondary text-white"
            mwlCalendarPreviousView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Previous
          </div>
          <div
            class="btn btn-outline-secondary"
            mwlCalendarToday
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Today
          </div>
          <div
            class="btn btn-secondary text-white"
            mwlCalendarNextView
            [view]="view"
            [(viewDate)]="viewDate"
            (viewDateChange)="viewDateChange.next(viewDate)"
          >
            Next
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h4>{{ viewDate | calendarDate: view + 'ViewTitle':locale }}</h4>
      </div>
      <div class="col-md-4 text-right">
        <div class="btn-group">
          <div
            class="btn btn-secondary text-white"
            (click)="viewChange.emit(CalendarView.Month)"
            [class.active]="view === CalendarView.Month"
          >
            Month
          </div>
          <div
            class="btn btn-secondary text-white"
            (click)="viewChange.emit(CalendarView.Week)"
            [class.active]="view === CalendarView.Week"
          >
            Week
          </div>
          <div
            class="btn btn-secondary text-white"
            (click)="viewChange.emit(CalendarView.Day)"
            [class.active]="view === CalendarView.Day"
          >
            Day
          </div>
        </div>
      </div>
    </div>
    <br />
  `,
})
export class CalendarHeaderComponent {
  @Input() view: CalendarView = CalendarView.Week;

  @Input() viewDate: Date = new Date();

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
}
