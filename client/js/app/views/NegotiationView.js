class NegotiationView {

  constructor(elementDOM){
    this._elementDOM = elementDOM;
  }

  update(model){
    this._elementDOM.innerHTML = this._template(model);
  }


  _template(model){
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.negotiations.map(n =>

             `
                <tr>
                  <td>${n.date}</td>
                  <td>${n.quantity}</td>
                  <td>${n.price}</td>
                  <td>${n.volume}</td>
                </tr>
            `
            ).join('')}

        </tbody>

        <tfoot>
          <td colspan="2"></td>
          <td>TOTAL:</td>
          <td>${model.negotiations.reduce((total,n)=>  total + n.volume,0.0)}</td>
        </tfoot>
    </table>

    `;
  }

}
