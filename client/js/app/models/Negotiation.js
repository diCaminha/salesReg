class Negotiation {

  constructor(date,quantity, price){
    this._date = new Date(date.getTime());
    this._quantity = quantity;
    this._price = price;
    Object.freeze(this);
  }

  get volume() {
    return this._quantity * this._price;
  }

  get date(){
    return `${this._date.getDate()}/
            ${this._date.getMonth()+1}/
            ${this._date.getFullYear()}`;
  }

  get quantity() {
    return this._quantity;
  }

  get price() {
      return this._price;
  }

}
