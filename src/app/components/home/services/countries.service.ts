import { Injectable } from '@angular/core';
import { ICountry } from '../../country/models/ICountry';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../../../../environments/env';
import { IHoliday } from '../../country/models/IHoliday';

@Injectable()
export class CountriesService {
  public countries: ICountry[] = [];

  private articleUrl: string = env.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"})
  };

  constructor(private client: HttpClient) { }

  public getCountries(): Observable<ICountry[]> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});

    return this.client.get<ICountry[]>(this.articleUrl + "AvailableCountries/", this.httpOptions);
  }

  public getCountryHolidaysForYear(year: number, countryCode: string): Observable<IHoliday[]> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});

    return this.client.get<IHoliday[]>(this.articleUrl + `PublicHolidays/${year}/${countryCode}`, this.httpOptions);
  }

  public getNextCountryHolidays(countryCode: string): Observable<IHoliday[]> {
    this.httpOptions.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "application/json"});

    return this.client.get<IHoliday[]>(this.articleUrl + `NextPublicHolidays/${countryCode}`, this.httpOptions);
  }
}
