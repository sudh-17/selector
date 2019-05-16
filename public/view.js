(function (window) {
    function View (dom, multiple = false) {
        this.dom = dom
        this.multiple = multiple
        let html = 
            `<div class="wrapper">
                <div class="content-container">
                    ${ this.multiple ? '<ul class="content"></ul>' : '<input class="content"  readonly/>' }
                </div>
                <div class="panel">
                    <div class="panel-header">
                        <input type="text" class="search" name="search" placeholder="输入关键字搜索"/>
                    </div>
                    <div class="panel-content">
                        <ul class="panel-list">
                        </ul>
                    </div>
                    <div class="panel-footer">
                        <div class="bt-gb"><button class="cancel">取消</button></div>
                        <div class="bt-gb"><button class="ok btn-primary">确定</button></div>
                    </div>
                </div>
                <div class="backdrop"></div>
            </div>`
        dom.innerHTML = html
        this.content = util.qs('.content', dom)
        this.panel = util.qs('.panel', dom)
        this.search = util.qs('.search', dom)
        this.list = util.qs('.panel-list', dom)
        this.backdrop = util.qs('.backdrop', dom)
    }
    
    View.prototype.template = function (item) {
        let type = this.multiple ? 'checkbox' : 'radio'
        let tmp = `<li class="panel-item" data-id="${item.key}">
                <span>${item.value}</span>
                <input name="item" key="${item.key}" value="${item.value}" class="check" type="${type}" ${item.checked ? 'checked' : ''}>
                <label class="check-icon ${ this.multiple ? 'rect': 'circle' }"></label>
            </li>`
        return tmp
    }
    
    View.prototype.renderList = function(list) {
        let html = ''
        list.forEach(item => {
            html += this.template(item) 
        })
        this.list.innerHTML = html
    }
    
    View.prototype.modal = function (command) {
        if (command === 'show') {
            this.panel.style.display = 'block'
            this.backdrop.style.display = 'block'
        } else if (command === 'hide'){
            this.panel.style.display = 'none'
            this.backdrop.style.display = 'none'
        } else {
            throw 'view.js的方法modal没有' + command + '命令'
        }
    }
    
    View.prototype.tag = function (item) {
        let tmp = `<li data-id="${ item.key }"><label data-id="${item.key}">X</label><span class="tag" title="${item.value}">${item.value}</span></li>`
        return tmp
    }
    
    View.prototype.appendTag = function (item) {
        this.content.innerHTML += this.tag(item)
    }
    
    View.prototype.removeTag = function (key) {
        let el = util.qs('[data-id="' + key + '"]')
        this.content.removeChild(el)
    }
    
    View.prototype.setValue = function(value) {
        return this.content.value = value
    }
    
    View.prototype.getValue = function() {
        return this.content.value
    }
    
    View.prototype.getSearchText = function() {
        return this.search.value
    }
    
    View.prototype.setSearchText = function(text) {
        return this.search.value = text
    }
    
    View.prototype.contentAction = function (callback) {
        let self = this
        // 点击输入框
        util.$delegated(this.dom, '.content', 'click', function (e) {
            callback.call(this, e)
        })
    }
    
    View.prototype.okAction = function(callback) {
        let self = this
        util.$delegated(this.dom, '.ok', 'click', function (e) {
            let items = util.qsa('.panel-item > input[name="item"]:checked', self.dom)
            let data = []
            items.forEach(it => {
                data.push({
                    key: it.getAttribute('key'),
                    value: it.value,
                    checked: true
                })
            })
            callback.call(this, data)
        })
    }
    
    View.prototype.cancelAction = function (callback) {
        util.$delegated(this.dom, '.cancel', 'click', function () {
            callback.call(this)
        })
    }
    
    View.prototype.searchAction = function (callback) {
        util.$delegated(this.dom, '.search', 'input', function(e) {
            let value = e.target.value
            callback.call(this, value)
        })
    }
    
    View.prototype.tagAction = function (callback) {
        util.$delegated(this.content, 'label', 'click', function(e) {
            let id = e.target.getAttribute('data-id')
            callback.call(this, id)
        })
    }

    window.View = View
} (window))
