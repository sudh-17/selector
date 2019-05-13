import Model from './model.js';
import View from './view.js';

function Selector (dom, data, multiple = false) {
  this.model = new Model(data);
  this.view = new View(dom, multiple);

  this.initAction()
}
//初始化数据
Selector.prototype.initData = function () {
  let data = this.model.getAll();
  this.view.renderList(data);
}

Selector.prototype.showModal = function () {
  this.view.modal('show');
}

Selector.prototype.hideModal = function () {
  this.view.modal('hide');
}
//初始化动作
Selector.prototype.initAction = function () {
  let self = this
  this.view.action()
  this.view.searchAction(function(keyword){
    let data = self.model.search(keyword)
    self.view.renderList(data)
  })
}

export default Selector;