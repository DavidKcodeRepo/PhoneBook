import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAddEditFormComponent } from './entry-add-edit-form.component';

describe('EntryAddEditFormComponent', () => {
  let component: EntryAddEditFormComponent;
  let fixture: ComponentFixture<EntryAddEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryAddEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryAddEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
