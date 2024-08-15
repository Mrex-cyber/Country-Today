import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountryComponent } from './components/country/country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CountriesService } from './components/home/services/countries.service';

// Angular Materials
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,

    FilterPipe,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,

    // Angular Materials
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [
    HttpClient,
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
