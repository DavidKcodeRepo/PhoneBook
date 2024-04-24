import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { NotesComponent } from './notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { EntryAddEditFormComponent } from './entry-add-edit-form/entry-add-edit-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    //Core
    AppComponent, 
    //Harbour Assist
    NavMenuComponent, // NavBar provided by reviewer
    HomeComponent, // Briefing page by revier
    //DK
    PhoneBookComponent, // App main page
    EntryAddEditFormComponent, //Form for adding/updating entries
    NotesComponent // Developer notes and review messages
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'phone-book', component: PhoneBookComponent },
      { path: 'notes', component: NotesComponent }
    ]),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    //Forms
    FormsModule,
    ReactiveFormsModule, 
    //Material UI modules:
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
