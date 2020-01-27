export class SavedAmount {
  public originalPrice: number;
  public percent: number;
  public budgetPrice: number;

  constructor () {}

  getSavedAmount() {
    if (typeof this.originalPrice !== 'undefined' && this.originalPrice > 0) {
      return (this.originalPrice / 100) * this.percent;
    } else if (typeof this.budgetPrice !== 'undefined') {
      return this.budgetPrice;
    }
  }

  isSavable() {
    return typeof this.getSavedAmount() !== 'undefined' && this.getSavedAmount() > 0;
  }
}
