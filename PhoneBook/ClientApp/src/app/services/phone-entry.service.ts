import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Service responsible for managing phone entries.
 * Provides methods for adding, updating, fetching, and deleting phone entries by calling the api.
 * temporary delvelopment to check the front end can be done using json-server and watching db.json, switch to port 3000.
 * Data should match the interface for phone-book-entry.ts
 */
export class PhoneEntryService {

  constructor(private _http: HttpClient) { }

/**
 * Adds a new phone entry.
 * @param data The data of the phone entry to be added.
 * @returns An Observable that emits the response from the server.
 */
  addPhoneEntry(data: any): Observable<any> {
    return this._http.post('https://localhost:7136/PhoneBook', data);
    //return this._http.post('https://localhost:3000/PhoneBook', data);
  }

/**
 * Updates an existing phone entry.
 * @param id The ID of the phone entry to be updated.
 * @param data The updated data for the phone entry.
 * @returns An Observable that emits the response from the server.
 */
  updatePhoneEntry(id: number, data: any): Observable<any> {
    return this._http.put(`https://localhost:7136/PhoneBook/${id}`, data);
    //return this._http.put(`https://localhost:3000/PhoneBook/${id}`, data);
  }

/**
 * Retrieves the list of phone entries.
 * @returns An Observable that emits the list of phone entries.
 */
  getPhoneEntryList(): Observable<any> {
    return this._http.get('https://localhost:7136/PhoneBook');
    //return this._http.get('https://localhost:3000/PhoneBook');
  }

/**
 * Deletes a phone entry.
 * @param id The ID of the phone entry to be deleted.
 * @returns An Observable that emits the response from the server.
 */
  deletePhoneEntry(id: number): Observable<any> {
    return this._http.delete(`https://localhost:7136/PhoneBook/${id}`)
    //return this._http.delete(`https://localhost:3000/PhoneBook/${id}`)
  }
}
