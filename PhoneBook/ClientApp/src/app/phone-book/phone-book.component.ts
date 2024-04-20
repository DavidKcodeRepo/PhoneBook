import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {
  }
    ngOnInit(): void {
      this.http.get(this.baseUrl + "phonebook").subscribe();
    }
}

