function Model(data){
    this.data = data
    this.data.forEach(item => {
        item.checked = false
    })
}

Model.prototype.getAll = function () {
    return this.data
}

export default Model