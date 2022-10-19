import {User} from "./models/User"
import { Insurance, Period, Currency } from './models/Insurance';

export const insuranceExample: Insurance = {
  id: 123456789,
  start: new Date("01.01.2021"),
  end: new Date("01.01.2022"),
  cost: 249,
  currency: Currency.NOK,
  period: Period.Mnd,
};

export const userExample: User = {
  firstName: "Per Andreas",
  lastName: "Hansen",
  insurance: insuranceExample,
};
