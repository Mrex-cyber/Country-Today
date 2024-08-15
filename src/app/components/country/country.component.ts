import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ICountry } from './models/ICountry';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../home/services/countries.service';
import { IHoliday } from './models/IHoliday';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnDestroy {
  public holidays: IHoliday[] = [];
  public years: number[] = [];

  private selectedYear: number = new Date().getFullYear();

  private _subHolidays!: Subscription;

  constructor(private route: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    this.loadCountryHolidays();
    this.generateYearBounds(2020, 2030);
  }

  ngOnDestroy(): void {
      this._subHolidays.unsubscribe();
  }

  public onYearSelectionChange(year: number) {
    this.selectedYear = year;
    this.loadCountryHolidays();
  }

  private loadCountryHolidays(): void {
    this._subHolidays = this.countriesService
      .getCountryHolidaysForYear(this.selectedYear, this.getCountryCode())
      .subscribe(response => this.holidays = response);
  }

  private getCountryCode(): string {
    return this.route.snapshot.paramMap.get('code') || '';
  }

  private generateYearBounds(start: number, end: number): void {
    this.years = [];

    while(start <= end){
      this.years.push(start++);
    }
  }
}
