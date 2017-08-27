class MessageView {

  constructor(elementDOM){

    this._elementDOM = elementDOM;
  }

  update(model){
    this._elementDOM.innerHTML = this._template(model);
  }

  _template(model){

    return ` <p class="alert alert-info">${model.text}</p>`;

  }

}
