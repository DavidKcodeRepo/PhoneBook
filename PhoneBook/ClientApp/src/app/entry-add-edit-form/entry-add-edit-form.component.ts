import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entry-add-edit-form',
  templateUrl: './entry-add-edit-form.component.html',
  styleUrls: ['./entry-add-edit-form.component.css']
})
export class EntryAddEditFormComponent {

  phoneEntryForm: FormGroup;

  constructor(private _fb:FormBuilder) {
    this.phoneEntryForm = this._fb.group({
      firstName: '',
      lastName: '',
      phoneNumber: ''
    });
  }

  onFormSubmit() {
    if (this.phoneEntryForm.valid) {
      console.log(this.phoneEntryForm.value)
    }
  }
}
