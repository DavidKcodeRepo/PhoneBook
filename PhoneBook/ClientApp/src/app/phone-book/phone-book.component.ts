import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntryAddEditFormComponent } from '../entry-add-edit-form/entry-add-edit-form.component';
import { PhoneEntryService } from '../services/phone-entry.service';
import { MatTableDataSource } from '@angular/material/table';


interface PhoneEntry
{
  id: string;
  firstname: string;
  surname: string;
  phoneNumber: string;
}

//This is the UI For the phone book, including a table of phone entires (first Name, last Name, Phone number),
//buttons for updating and deleting records and a new entry button.
@Component(
{
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css'],
})
export class PhoneBookComponent implements OnInit
{

  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNumber', 'action'];
  dataSource = new MatTableDataSource<PhoneEntry>();

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

  getPhoneEntries()
  {
    this._phoneEntryService.getPhoneEntryList().subscribe(
    {
      next: (response: PhoneEntry[]) =>
      {
        this.dataSource.data = response;
      },
      error: (err) =>
      {
        console.log(err);
      }
    })
  }

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

