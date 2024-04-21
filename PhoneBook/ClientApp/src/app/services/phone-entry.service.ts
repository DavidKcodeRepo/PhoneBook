import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneEntryService {

  constructor(private _http: HttpClient) { }

  addPhoneEntry(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/phoneEntries', data);
  }

  updatePhoneEntry(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/phoneEntries/${id}`, data);
  }

  getPhoneEntryList(): Observable<any> {
    return this._http.get('http://localhost:3000/phoneEntries');
  }

  deletePhoneEntry(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/phoneEntries/${id}`)
  }
}
