import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhoneEntryService } from '../services/phone-entry.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component(
{
  selector: 'app-entry-add-edit-form',
  templateUrl: './entry-add-edit-form.component.html',
  styleUrls: ['./entry-add-edit-form.component.css']
  })
 
// This form is the UI for both updating existing PhonEntries and creating new PhoneEntries.
export class EntryAddEditFormComponent implements OnInit
{

  phoneEntryForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _phoneEntryService: PhoneEntryService,
    private _dialogRef: MatDialogRef<EntryAddEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) // data when we are update 
  {
    this.phoneEntryForm = this._fb.group(
    {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    });
  }
  // when form is opened, grab data provided (in case of update button clicked)
  ngOnInit(): void
  {
        this.phoneEntryForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.phoneEntryForm.valid)
    {
      //if form has data prior to user input
      if (this.data)
      //this is an update
      {
        this._phoneEntryService.updatePhoneEntry(this.data.id, this.phoneEntryForm.value).subscribe(
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
      //this is a create
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
