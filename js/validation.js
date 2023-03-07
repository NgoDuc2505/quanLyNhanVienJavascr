function ValiDATION() {
    this.checkEmpty = function (dataInput, outputSpan, message, condition) {
        if (dataInput == condition) {
            document.querySelector(outputSpan).style.display = "block";
            document.querySelector(outputSpan).innerHTML = message;
            return false;
        } else {
            document.querySelector(outputSpan).style.display = "none";
            document.querySelector(outputSpan).innerHTML = "";
            return true;
        }
    }
    this.checkUser = function (arrayInput, spanID, value) {
        var isExit = false;
        isExit = arrayInput.some(function (eo) {
            return value === eo.user;
        })
        if (isExit) {
            getMyEle(spanID).style.display = "block"
            getMyEle(spanID).innerHTML = "Tên đăng nhập không được trùng, hãy thử tên khác!"
            return false;
        } else {
            getMyEle(spanID).style.display = "none"
            return true;
        }
    }
    this.checkUserInput = function (datainput, spanID, message) {
        var pattern = /^[0-9]{4,6}$/;
        if (datainput.match(pattern)) {
            getMyEle(spanID).style.display = "none"
            return true;
        }
        else {
            getMyEle(spanID).style.display = "block"
            getMyEle(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkName = function (datainput, spanID, message) {
        var patternName = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (datainput.match(patternName)) {
            getMyEle(spanID).style.display = "none"
            return true;
        } else {
            getMyEle(spanID).style.display = "block"
            getMyEle(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkEmail = function (datainput, spanID, message) {
        var patternEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (datainput.match(patternEmail)) {
            getMyEle(spanID).style.display = "none"
            return true;
        } else {
            getMyEle(spanID).style.display = "block"
            getMyEle(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkPass = function (datainput, spanID, message) {
        var patternPass = /^(?=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
        if (datainput.match(patternPass)) {
            getMyEle(spanID).style.display = "none"
            return true;
        } else {
            getMyEle(spanID).style.display = "block"
            getMyEle(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkBaseIncome = function (datainput, spanID, message) {
        if (datainput >= 1000000 && datainput <= 20000000) {
            getMyEle(spanID).style.display = "none"
            return true;
        } else {
            getMyEle(spanID).style.display = "block"
            getMyEle(spanID).innerHTML = message;
            return false;
        }
    }
    this.checkTime = function (datainput, spanID, message) {
        if (datainput >= 80 && datainput <= 200) {
            getMyEle(spanID).style.display = "none"
            return true;
        } else {
            getMyEle(spanID).style.display = "block"
            getMyEle(spanID).innerHTML = message;
            return false;
        }
    }
}