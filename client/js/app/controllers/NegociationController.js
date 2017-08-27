class NegociationController {

  constructor(){

    let $ = document.querySelector.bind(document);
    this._priceInput = $("#price");
    this._dateInput = $("#date");
    this._quantityInput = $("#quantity");

    this._listNegociations = new ListNegociations();
    this._negociationView = new NegociationView($("#negociations-view"));

    //this._negociationView.update(this._listNegociations);

  }

  _cleanForm(){
    this._priceInput.value = 0.0;
    this._dateInput.value='';
    this._quantityInput.value = 1;

    this._dateInput.focus();
  }

  _createNegociation(){
    let date = new Date(this._dateInput.value.replace(/-/g,','));
    return new Negociation(date,this._quantityInput.value,this._priceInput.value);
  }

  adiciona(event){
    event.preventDefault();
    this._listNegociations.add(this._createNegociation());
    this._cleanForm();

    this._negociationView.update(this._listNegociations);
    alert("Negociation added with success!");

  }
}
