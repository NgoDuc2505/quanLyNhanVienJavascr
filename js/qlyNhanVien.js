function EmployeeManage(){
    this.mainArr = [];
    this.addNV = function(nhanVien){
        this.mainArr.push(nhanVien)
    }
    this.findIndexObject = function(data){
        var indexFunc = -1;
       indexFunc = this.mainArr.findIndex(function(eo){
            return eo.user == data;
        })
        return indexFunc;
    }
    this.delete = function(data){
        var index = this.findIndexObject(data);
        if(index != -1){
            this.mainArr.splice(index,1);
        }
    }
    this.updateData = function(eo){
        var index = this.findIndexObject(eo.user);
        if(index != -1){
            em.mainArr[index] = eo;
        }
    }
}
EmployeeManage.prototype.search = function(keyWord){
    var keyWordLowerCase = keyWord.toLowerCase();
    keyWordLowerCase = keyWordLowerCase.replace(/\s/g,"")
    var searchArr = [];
    this.mainArr.map(function(eo){
        if(eo.rankOut.indexOf(keyWordLowerCase) > -1){
            searchArr.push(eo)
        }
    })
    return searchArr;
}