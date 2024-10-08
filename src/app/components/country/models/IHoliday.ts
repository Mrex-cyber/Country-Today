import { ICountry } from "./ICountry";

export interface IHoliday {
  date: string,
  localName: string,
  name: string,
  countryCode: string,
  fixed: boolean,
  global: boolean,
  counties: ICountry[],
  launchYear: string,
  types: string[]
}
