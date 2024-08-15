import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../home/services/countries.service';
import { ICountry } from '../country/models/ICountry';
import { IHoliday } from '../country/models/IHoliday';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public countries: ICountry[] = [];
  public widgetHolidays: IHoliday[] = [];
  public template: string = "";

  private widjetHolidaysCount: number = 3;

  private _subsctiptions: Subscription[] = [];

  constructor(private countryService: CountriesService) { }

  ngOnInit() {
    this.loadCountries();
  }

  ngOnDestroy(): void {
    this._subsctiptions.forEach(s => s.unsubscribe());
  }

  private loadCountries(){
    this._subsctiptions.push(this.countryService.getCountries().subscribe(response => {
      this.countries = response;
      this.countryService.countries = response;

      this.loadWidjetHolidays();
    }));
  }

  private loadWidjetHolidays(){
    this.widgetHolidays = [];

    for (let i = 0; i < this.widjetHolidaysCount; i++){
      const countryCode = this.getCountryCodeByIndex(this.generateRandomCountryNumber());

      this._subsctiptions.push(this.countryService.getNextCountryHolidays(countryCode).subscribe(response => this.widgetHolidays.push(response[0])));
    }
  }

  private generateRandomCountryNumber(): number{
    return Math.floor(Math.random() * this.countries.length);
  }

  private getCountryCodeByIndex(index: number): string {
    return this.countries[index].countryCode;
  }
}
