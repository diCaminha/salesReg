class NegotiationController {

  constructor(){

    let $ = document.querySelector.bind(document);
    this._priceInput = $("#price");
    this._dateInput = $("#date");
    this._quantityInput = $("#quantity");

    this._listNegotiations = new ListNegotiations();
    this._negotiationView = new NegotiationView($("#negotiations-view"));
    this._message = new Message();
    this._messageView = new MessageView($("#message-view"));
    //this._negotiationView.update(this._listnegotiations);

  }

  _cleanForm(){
    this._priceInput.value = 0.0;
    this._dateInput.value='';
    this._quantityInput.value = 1;

    this._dateInput.focus();
  }

  _createNegotiation(){
    let date = new Date(this._dateInput.value.replace(/-/g,','));
    return new Negotiation(date,this._quantityInput.value,this._priceInput.value);
  }

  adiciona(event){
    event.preventDefault();
    this._listNegotiations.add(this._createNegotiation());
    this._negotiationView.update(this._listNegotiations);

    this._message.text = "Negotiation added with success!";
    this._messageView.update(this._message);

      this._cleanForm();
  }
}
