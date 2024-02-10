import { Component , Input} from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'src/app/shared/calendar.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {

  constructor(public activeModal: NgbActiveModal,private calendarService: CalendarService, private toastr: ToastrService, private router: Router) { }
  @Input() date : any;
  
  updateObj: any = {
    username: '',
    email: '',
    title: '',
    booking_date:'',
    start_time: '',
    end_time: ''
  };
  public errorMsg:boolean = false;

    updateSubmit(){
      console.log(this.updateObj);
      if(this.updateObj['booking_date'] && this.updateObj['start_time'] && this.updateObj['end_time']){
        this.errorMsg = false;
      }else{
        this.errorMsg = true;
      }

      this.calendarService.addBooking(this.updateObj).subscribe(
        (data: any) => {
          if (data['statusCode'] == 200) {
            this.activeModal.close();
            this.toastr.success('Booking added successfully', 'Success');
          }else{
            this.toastr.error('Something went wrong,Please try another slot', 'Error');
         
          }
        }
      )
    }


  closeModal() {
    this.activeModal.close();
  }
}
