import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepickerConfig
} from '@ng-bootstrap/ng-bootstrap';

import { DonerService } from '../services/doner.service'

@Component({
  selector: 'app-create-doner',
  templateUrl: './create-doner.component.html',
  styleUrls: ['./create-doner.component.css'],
  providers: [NgbInputDatepickerConfig]
})
export class CreateDonerComponent implements OnInit {

  model: NgbDateStruct;

  locationArray: string[] = []

  constructor(config: NgbInputDatepickerConfig, public userService: DonerService, public router: Router, calendar: NgbCalendar) {
    // customize default values of datepickers used by this component tree
    config.minDate = { year: 2000, month: 1, day: 1 };
    config.maxDate = { year: 2003, month: 12, day: 31 };

    config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;

    // setting datepicker popup to close only on click outside
    config.autoClose = 'outside';

    // setting datepicker popup to open above the input
    config.placement = ['top-left', 'top-right'];
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    this.userService.add(form.value).subscribe(res => {
      console.log(res);
      this.router.navigate([''])

    })
  }

}
