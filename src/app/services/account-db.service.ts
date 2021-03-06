import {Injectable} from '@angular/core';

@Injectable()
export class AccountDbService {

  private savedUpKey = 'savedAmount';

  constructor() { }

  setTotal(value) {
    if (!isNaN(Number(value))) {
      console.log('Saving value ', value);
      localStorage.setItem(this.savedUpKey, String(this.getTotal() + value));
    }
  }

  isEmpty() {
    return this.getTotal() === 0;
  }

  getTotal() {
    return Number(localStorage.getItem(this.savedUpKey));
  }

  deleteTotal() {
    localStorage.clear();
  }

}
