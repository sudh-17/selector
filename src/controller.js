
function Controller (model, view) {
  this.model = model;
  this.view = view;
}

Controller.prototype.initData = function () {
  let data = this.model.getAll();
  this.view.createList(data);
}

Controller.prototype.showModal = function () {
  this.view.modal('show');
}

Controller.prototype.hideModal = function () {
  this.view.modal('hide');
}

export default Controller;