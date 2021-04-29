import { Component, OnInit } from '@angular/core';
import { DonerService } from '../services/doner.service';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-doner',
  templateUrl: './list-doner.component.html',
  styleUrls: ['./list-doner.component.css']
})

export class ListDonerComponent implements OnInit {
  dataSource: any;
  groupByCity: JSON = <JSON><JSON>{};
  city: any[];
  countOfDoners: any[];
  json
  responseData: any;
  donerList: any[] = [];

  constructor(public donerService: DonerService) { }
  ngOnInit(): void {

    this.donerService.get()
      .pipe(
        map(responseData => {
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {

              this.donerList.push({ ...responseData[key] })
            }
          }
          return this.donerList;
        }))
      .subscribe((res) => {
        this.dataSource = res
        const groupByCity = this.dataSource.reduce((acc, it) => {
          acc[it.city] = acc[it.city] + 1 || 1;
          return acc;
        }, {});

        this.json = JSON.parse(JSON.stringify(groupByCity));
        this.city = Object.entries(this.json).map(p => encodeURIComponent(p[0]));
        this.countOfDoners = Object.entries(this.json).map(p => encodeURIComponent(Number(p[1])));
      })
  }

  onRequestPlasma(form: NgForm) {
    console.log(form);
    this.donerService.sendEmails(form).subscribe((res => {
      console.log(res, "..............");
    }));
  }
}