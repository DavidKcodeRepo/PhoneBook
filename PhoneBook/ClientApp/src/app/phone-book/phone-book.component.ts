import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntryAddEditFormComponent } from '../entry-add-edit-form/entry-add-edit-form.component';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private _dialog: MatDialog
  ) { }
    ngOnInit(): void {
      this.http.get(this.baseUrl + "phonebook").subscribe();
  }

  OpenEntryAddEditForm(): void {
    const dialogRef = this._dialog.open(EntryAddEditFormComponent, {
      width: '400px',
    });
  }
}

