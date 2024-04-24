import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntryAddEditFormComponent } from '../entry-add-edit-form/entry-add-edit-form.component';
import { PhoneEntryService } from '../services/phone-entry.service';
import { MatTableDataSource } from '@angular/material/table';
import { PhoneBookEntry } from '../models/phone-book-entry'

/*
 * Componenet responsible for the UI of the phone book.
 * It includes: a table of phone entires (first Name, last Name, Phone number),
 * and buttons for updating and deleting records and a new entry button.
 */
@Component(
{
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css'],
})
export class PhoneBookComponent implements OnInit
{

  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNumber', 'action'];
  dataSource = new MatTableDataSource<PhoneBookEntry>();

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private _dialog: MatDialog,
    private _phoneEntryService: PhoneEntryService
  ) { }

  ngOnInit(): void
  {
      this.getPhoneEntries();
  }

  /**
  * Opens the dialog for adding a new phone entry.
  * When the dialog is closed, refreshes the phone entry list if a new entry is added.
  */
  OpenEntryAddEditForm(): void
  {
    const dialogRef = this._dialog.open(EntryAddEditFormComponent,
    {
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe(
    {
      next: (val) =>
      {
        if (val)
        {
          this.getPhoneEntries();
        }
      }
    });
  }

/*
 * Opens the dialog for editing an existing phone entry.
 * When the dialog is closed, refreshes the phone entry list if changes are made.
 * @param data The data of the phone entry to be edited.
 */
  OpenEntryEditForm(data: any): void
  {
    const dialogRef = this._dialog.open(EntryAddEditFormComponent,
    {
      data: data,
      width: '1200px',
      });;
    dialogRef.afterClosed().subscribe(
    {
      next: (val) => {
        if (val) {
          this.getPhoneEntries();
        }
      }
    });
  }

 /**
 * Retrieves the list of phone entries from the phoneEntryService
 */
  getPhoneEntries()
  {
    this._phoneEntryService.getPhoneEntryList().subscribe(
    {
        next: (response: PhoneBookEntry[]) =>
      {
        this.dataSource.data = response;
      },
      error: (err) =>
      {
        console.log(err);
      }
    })
  }

 /*
  * Deletes a phone entry.
  * Alerts the user when the deletion is successful and refreshes the phone entry list.
  * @param id The ID of the phone entry to be deleted.
  */
  deletePhoneEntry(id: number)
  {
    this._phoneEntryService.deletePhoneEntry(id).subscribe(
    {
      next: (response) =>
      {
      alert('Contact Deleted!')
      this.getPhoneEntries();
      },
      error: (err) =>
      {
      console.log(err);
      }
    })
  }
}

