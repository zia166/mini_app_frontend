import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarUtilsModule } from './calendar-utils-module/module';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from './calendar.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalUserDetailComponent } from './Modal/modal-user-detail/modal-user-detail.component';
import { AboutModalComponent } from './Modal/about-modal/about-modal.component';
import { ModalFormComponent } from './Modal/modal-form/modal-form.component';
@NgModule({
  declarations: [
    CalendarComponent,
    ModalUserDetailComponent,
    AboutModalComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CalendarUtilsModule
  ],
  providers: [CalendarService],
  exports: [CalendarComponent,NgbModule,CalendarUtilsModule,FormsModule,ToastrModule] 
})
export class SharedModule { }
