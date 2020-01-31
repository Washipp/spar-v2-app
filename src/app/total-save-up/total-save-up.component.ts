import {Component} from '@angular/core';
import {AccountDbService} from '../services/account-db.service';

@Component({
  selector: 'app-total-save-up',
  templateUrl: './total-save-up.component.html',
  styleUrls: ['./total-save-up.component.css']
})
export class TotalSaveUpComponent {

  totalSaved: number;
  service;

  constructor(db: AccountDbService) {
    this.service = db;
    this.updateTotalSaved();
  }


  updateTotalSaved() {
    this.totalSaved = this.service.getTotal();
  }

  resetTotalSaved() {
    this.service.deleteTotal();
    this.updateTotalSaved();
  }

  loadModal() {
    const languageCode = navigator.language;
    console.log(languageCode);
    // @ts-ignore
    M.Modal.init(document.querySelectorAll('.modal'));
  }
}
