function getMyEle(id) {
    return document.querySelector(id);
}
const em = new EmployeeManage();
const validation = new ValiDATION();
function setLocalStorage() {
    localStorage.setItem("employeeManage", JSON.stringify(em.mainArr))
}
function changeInHtml(update,add,headerContent){
    getMyEle("#btnCapNhat").style.display = update;
    getMyEle("#btnThemNV").style.display = add;
    getMyEle("#header-title").innerHTML = headerContent;
}
function clearAlert (){
    var alertSpan = document.querySelectorAll(".sp-thongbao");
    for (var i =0; i < alertSpan.length; i++){
        alertSpan[i].innerHTML = "";
    }
};
//TODO VALIDATION GLOBAL ---->HERE!!

function checkValid (fullName, email, pass, date,income, position, workTime){
    var isValid = true;
    isValid &= validation.checkEmpty(fullName, "#tbTen", "Hãy nhập họ và tên!", "")&& validation.checkName(fullName,"#tbTen","Hãy nhập tên hợp lệ!");
    isValid &= validation.checkEmpty(email, "#tbEmail", "Hãy nhập email!", "")&& validation.checkEmail(email, "#tbEmail", "Hãy nhập email hợp lệ!");
    isValid &= validation.checkEmpty(pass, "#tbMatKhau", "Hãy nhập mật khẩu!", "")&& validation.checkPass(pass, "#tbMatKhau", "Mật khẩu phải có 6-10 kí tự, phải chứa ít nhất 1 ký tự số,1 ký tự thường, 1 ký tự in hoa, 1 ký tự đặc biệt(!@#$%^&*)");
    isValid &= validation.checkEmpty(date, "#tbNgay", "Hãy nhập ngày!", "")&& validation.checkDate(date, "#tbNgay", "Hãy nhập ngày theo định dạng mm/dd/yyyy!", "Hãy nhập năm hợp lệ!");
    isValid &= validation.checkEmpty(income, "#tbLuongCB", "Hãy nhập lương cơ bản!", "")&& validation.checkBaseIncome(income,"#tbLuongCB", "Lương nhập từ 1000000 - 20000000" );
    isValid &= validation.checkEmpty(position, "#tbChucVu", "Hãy chọn chức vụ!","Chọn chức vụ");
    isValid &= validation.checkEmpty(workTime, "#tbGiolam", "Hãy nhập giờ làm!","")&& validation.checkTime(workTime, "#tbGiolam","Số giờ làm trong tháng từ 80 - 200 giờ!");
    return isValid;
}

function showInTable(data) {
    var content = "";
    data.map(function (eo) {
        var trContent = ` <tr>
        <td>${eo.user}</td>
        <td>${eo.fullName}</td>
        <td>${eo.email}</td>
        <td>${eo.date}</td>
        <td>${eo.position}</td>
        <td>${eo.totalIncome} vnd </td>
        <td>${eo.rankOut}</td>
        <td>
            <button onclick = showDta('${eo.user}') data-toggle="modal" data-target="#myModal" class="btn btn-success my-2">Xem</button>
            <button onclick= deleteObject('${eo.user}') class="btn btn-danger">Xóa</button>
        </td>
        </tr>`
        content += trContent;
    })
    getMyEle("#tableDanhSach").innerHTML = content;
}
function getLocalStorage() {
    if (localStorage.getItem("employeeManage") != null) {
        em.mainArr = JSON.parse(localStorage.getItem("employeeManage"));
        showInTable(em.mainArr);
    }
} getLocalStorage();

function emptyLogin(){
    changeInHtml("none","block","Login")
    clearAlert();
    getMyEle("#tknv").disabled = false;
    getMyEle("#tknv").value = "";
    getMyEle("#name").value = "";
    getMyEle("#email").value = "";
    getMyEle("#password").value = "";
    getMyEle("#datepicker").value = "";
    getMyEle("#luongCB").value = "";
    getMyEle("#chucvu").value = "Chọn chức vụ";
    getMyEle("#gioLam").value = "";
} getMyEle("#btnThem").onclick = emptyLogin;

function addEmploy() {
    var user = getMyEle("#tknv").value;
    var fullName = getMyEle("#name").value;
    var email = getMyEle("#email").value;
    var pass = getMyEle("#password").value;
    var date = getMyEle("#datepicker").value;
    var income = getMyEle("#luongCB").value;
    var position = getMyEle("#chucvu").value;
    var workTime = getMyEle("#gioLam").value;
   //TODO VALIDATION!-----------------------ABOVE
   var isValidUser = true;
   isValidUser = validation.checkEmpty(user, "#tbTKNV", "Hãy nhập tài khoản!", "") && validation.checkUser(em.mainArr, "#tbTKNV",user )&& validation.checkUserInput(user,"#tbTKNV","Tài khoản phải từ 4-6 ký số (Ví dụ:000001)");
    if( checkValid(fullName, email, pass, date,income, position, workTime) && isValidUser){
        var eo = new Employee(user, fullName, email, pass, date,Number(income), position, workTime)
        eo.total();
        eo.rank();
        em.addNV(eo)
        showInTable(em.mainArr);
        setLocalStorage()
        alert("Đã thêm thành công!");
    }
} getMyEle("#btnThemNV").onclick = addEmploy;

function deleteObject(data) {
    em.delete(data);
    setLocalStorage();
    getLocalStorage();
};

function showDta(data) {
    changeInHtml("block","none","Cập nhật thông tin")
    clearAlert();
    var index = em.findIndexObject(data);
    if (index != -1) {
        getMyEle("#tknv").value = em.mainArr[index].user;
        getMyEle("#tknv").disabled = true;
        getMyEle("#name").value = em.mainArr[index].fullName;
        getMyEle("#email").value = em.mainArr[index].email;
        getMyEle("#password").value = em.mainArr[index].pass;
        getMyEle("#datepicker").value = em.mainArr[index].date;
        getMyEle("#luongCB").value = em.mainArr[index].income;
        getMyEle("#chucvu").value = em.mainArr[index].position;
        getMyEle("#gioLam").value = em.mainArr[index].workTime;
    }
}

function update(){
    var user = getMyEle("#tknv").value;
    var fullName = getMyEle("#name").value;
    var email = getMyEle("#email").value;
    var pass = getMyEle("#password").value;
    var date = getMyEle("#datepicker").value;
    var income = getMyEle("#luongCB").value;
    var position = getMyEle("#chucvu").value;
    var workTime = getMyEle("#gioLam").value;
    if( checkValid(fullName, email, pass, date,income, position, workTime)){
        var eo = new Employee(user, fullName, email, pass, date, Number(income), position, workTime)
        eo.total();
        eo.rank();
        em.updateData(eo);
        setLocalStorage();
        getLocalStorage();
        alert("Đã cập nhật!");
    }
}getMyEle("#btnCapNhat").onclick = update;

function searchEO(){
    var rankInput = getMyEle("#searchName").value
    var result = em.search(rankInput);
    showInTable(result);
} getMyEle("#searchName").onkeyup = searchEO;