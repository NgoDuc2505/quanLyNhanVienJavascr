function Employee(user, fullName, email, pass, date, income, position, workTime) {
    this.user = user;
    this.fullName = fullName;
    this.email = email;
    this.pass = pass;
    this.date = date;
    this.income = income;
    this.position = position;
    this.workTime = workTime;
    this.total = function () {
        switch (this.position) {
            case "Sếp":
                this.totalIncome = this.income * 3;
                break;
            case "Trưởng phòng":
                this.totalIncome = this.income * 2;
                break;
            case "Nhân viên":
                this.totalIncome = this.income;
                break;
            default:
                break;
        }
    }
    this.rank = function () {
        if (this.workTime >= 192) {
            this.rankOut = "Nhân viên xuất sắc";
        } else if (this.workTime >= 176) {
            this.rankOut = "Nhân viên giỏi";
        } else if (this.workTime >= 160) {
            this.rankOut = "Nhân viên khá";
        } else {
            this.rankOut = "Nhân viên trung bình";
        }
    }
}