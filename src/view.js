import './util'

function View (dom) {
    this.dom = dom
    let html = 
        `<div class="wrapper">
            <div class="contents" @click="focus">fgggffs</div>
            <div class="panel">
                <div class="panel-header">
                    <input type="text" name="search">
                </div>
                <div class="panel-content">
                    <ul class="panel-list">
                    </ul>
                </div>
                <div class="panel-footer">
                    <div class="bt-gb"><button class="cancel" @click="handleCancel">取消</button></div>
                    <div class="bt-gb"><button class="ok" @click="handleOk">确定</button></div>
                </div>
            </div>
            <div class="backdrop"></div>
        </div>`;
    dom.innerHTML = html;
    this.content = qs('.content', dom);
    this.panel = qs('.panel', dom);
    this.list = qs('.panel-list', dom);
    this.backdrop = qs('.backdrop', dom);
}

View.prototype.template = function (item) {
    let tmp = `<li class="panel-item" data-id="${item.id}">
            <span>${item.value}</span>
            <input class="check" type="checkbox" name="" id="">
        </li>`;
    return tmp;
}

View.prototype.renderList = function(list) {
    let html = '';
    list.forEach(item => {
        html += this.template(item) 
    })
    this.list = html;
}

View.prototype.modal = function (command) {
    if (command === 'show') {
        this.panel.style.display = 'block';
        this.backdrop.style.display = 'block';
    } else if (command === 'hide'){
        this.panel.style.display = 'none';
        this.backdrop.style.display = 'none';
    } else {
        console.error('view.js的方法modal没有', command, '命令')
    }
}


export default View