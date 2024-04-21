import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneEntryService {

  constructor(private _http: HttpClient) { }

  addPhoneEntry(data: any): Observable<any> {
    return this._http.post('https://localhost:7136/PhoneBook', data);
  }

  updatePhoneEntry(id: number, data: any): Observable<any> {
    return this._http.put(`https://localhost:7136/PhoneBook/${id}`, data);
  }

  getPhoneEntryList(): Observable<any> {
    return this._http.get('https://localhost:7136/PhoneBook');
  }

  deletePhoneEntry(id: number): Observable<any> {
    return this._http.delete(`https://localhost:7136/PhoneBook/${id}`)
  }
}
