import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonerService {

  constructor(private _http: HttpClient) { }

  add(form) {

    return this._http.post('http://localhost:3000/create-doner', form);
  }

  get() {
    return this._http.get('http://localhost:3000/list-of-doners');
  }

  search(search) {
    console.log(search);
    return this._http.post('http://localhost:3000/search', search)
  }

  sendEmails(form) {
    console.log('send emails in services');
    return this._http.post('http://localhost:3000/notify', form)
  }

}