import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhoneEntryService } from '../services/phone-entry.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PhoneBookEntry } from '../models/phone-book-entry'; // Import the interface

@Component(
{
  selector: 'app-entry-add-edit-form',
  templateUrl: './entry-add-edit-form.component.html',
  styleUrls: ['./entry-add-edit-form.component.css']
})
 
// This form is the UI for both updating existing PhoneEntries and creating new PhoneEntries.
export class EntryAddEditFormComponent implements OnInit
{

  phoneEntryForm: FormGroup;
  phoneEntry: PhoneBookEntry;
  constructor(
    private _fb: FormBuilder,
    private _phoneEntryService: PhoneEntryService,
    //reference to the dialog  is used to force refreshes after update/delete actions
    private _dialogRef: MatDialogRef<EntryAddEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.phoneEntry =
    {
      phoneBookEntryId: undefined,
      firstname: undefined,
      surname: undefined,
      phoneNumber: undefined
    };
    this.phoneEntryForm = this._fb.group(
      {
      phoneBookEntryId: undefined,
      firstname: '',
      surname: '',
      phoneNumber: ''
    });
  }
  // when form is opened, grab data provided (in case of update button clicked)
  ngOnInit(): void
  {
        this.phoneEntryForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.phoneEntryForm.valid) // TODO - no validation of forms is currently implemented
    {
      //if form has data prior to user input
      if (this.data)
      //this is an update an existing record
      {
        this.phoneEntryForm.value.phoneBookEntryId = this.data.phoneBookEntryId;
        this._phoneEntryService.updatePhoneEntry(this.data.phoneBookEntryId, this.phoneEntryForm.value).subscribe(
          {
            next: (val: any) => {
              alert('Phone Entry updated')
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            }
          })
      }
      else
      //this is a create new entry
      {
        this._phoneEntryService.addPhoneEntry(this.phoneEntryForm.value).subscribe(
          {
            next: (val: any) => {
              alert('Phone Entry added successfully')
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            }
          })
      }
    }
  }
}
