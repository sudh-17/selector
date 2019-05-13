function Model(data){
    this.data = data
    this.data.forEach((item, index) => {
        //item.checked = index % 2 === 0 ? true : false
        item.checked = false
    })
}

Model.prototype.getAll = function () {
    return this.data
}
Model.prototype.search = function (text) {
    let reg = '/.*' + text + '.*/'
    return this.data.filter(item => eval(reg).test(item.value))
}


export default Model