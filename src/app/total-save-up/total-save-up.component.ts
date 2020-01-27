import {Component} from '@angular/core';
import {AccountDbService} from '../services/account-db.service';

@Component({
  selector: 'app-total-save-up',
  templateUrl: './total-save-up.component.html',
  styleUrls: ['./total-save-up.component.css']
})
export class TotalSaveUpComponent {

  totalSaved: number;
  private service;

  constructor(db: AccountDbService) {
    this.service = db;
    this.updateTotalSaved();
    /** Initialize Delete Modal
     document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems);
    });**/
  }


  updateTotalSaved() {
    this.totalSaved = this.service.getTotal();
  }

  resetTotalSaved() {
    this.service.deleteTotal();
    this.updateTotalSaved();
  }
}
