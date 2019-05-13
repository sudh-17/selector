import util from './util.js'


function View (dom, multiple = false) {
    this.dom = dom;
    this.multiple = multiple
    let html = 
        `<div class="wrapper">
            <input class="content">content</input>
            <div class="panel">
                <div class="panel-header">
                    <input type="text" class="search" name="search">
                </div>
                <div class="panel-content">
                    <ul class="panel-list">
                    </ul>
                </div>
                <div class="panel-footer">
                    <div class="bt-gb"><button class="cancel">取消</button></div>
                    <div class="bt-gb"><button class="ok">确定</button></div>
                </div>
            </div>
            <div class="backdrop"></div>
        </div>`;
    dom.innerHTML = html;
    this.content = util.qs('.content', dom);
    this.panel = util.qs('.panel', dom);
    this.search = util.qs('.search', dom);
    this.list = util.qs('.panel-list', dom);
    this.backdrop = util.qs('.backdrop', dom);
}

View.prototype.template = function (item) {
    let type = this.multiple ? 'checkbox' : 'radio';
    let tmp = `<li class="panel-item" data-id="${item.key}">
            <span>${item.value}</span>
            <input name="item" class="check" type="${type}" ${item.checked ? 'checked' : ''}>
        </li>`;
    return tmp;
}

View.prototype.renderList = function(list) {
    let html = '';
    list.forEach(item => {
        html += this.template(item) 
    })
    this.list.innerHTML = html;
}

View.prototype.modal = function (command) {
    if (command === 'show') {
        this.panel.style.display = 'block';
        this.backdrop.style.display = 'block';
    } else if (command === 'hide'){
        this.panel.style.display = 'none';
        this.backdrop.style.display = 'none';
    } else {
        throw 'view.js的方法modal没有' + command + '命令'
    }
}

View.prototype.action = function () {
    let self = this;
    // 点击输入框
    util.$delegated(this.dom, '.content', 'click', function (e) {
        self.panel.style.display = 'block';
        self.backdrop.style.display = 'block';
    })
    
    // ok
    util.$delegated(this.dom, '.ok', 'click', function (e) {
        self.panel.style.display = 'none';
        self.backdrop.style.display = 'none';
    })
    // cancel
    util.$delegated(this.dom, '.cancel', 'click', function (e) {
        self.panel.style.display = 'none';
        self.backdrop.style.display = 'none';
    })
}

View.prototype.searchAction = function(callback) {
    util.$delegated(this.dom, '.search', 'input', function(e) {
        let value = e.target.value
        callback.call(this, value)
        console.log('ff')
    })
}

export default View