import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { VotersComponent } from './voters/voters.component';
import { VotingStatsComponent } from './voting-stats/voting-stats.component';
import { VotingComponent } from './voting/voting.component';
import { NewPersonComponent } from './new-person/new-person.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    VotingComponent,
    VotersComponent,
    CandidatesComponent,
    DataTableComponent,
    VotingStatsComponent,
    NewPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    FlexLayoutModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
