import Model from './model.js';
import View from './view.js';

function Selector (dom, data) {
  this.model = new Model(data);
  this.view = new View(dom);
}

Selector.prototype.initData = function () {
  let data = this.model.getAll();
  this.view.createList(data);
}

Selector.prototype.showModal = function () {
  this.view.modal('show');
}

Selector.prototype.hideModal = function () {
  this.view.modal('hide');
}

export default Selector;