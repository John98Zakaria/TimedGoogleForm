
//Edit this section only
//Date in java has the following format (year,month,day,hour,minute), January = 0 , February = 1 ... etc
var form_open_time = new Date(2020,3,14,20,45); //This exam opens on the 14.04.2020 at 20:45
var form_close_time = new Date(2020,3,14,21,00);//This exam closes on the 14.04.2020 at 21:00

//End 


function close_form() {
    var form = FormApp.getActiveForm();
    form.setAcceptingResponses(false);
}

function open_form() {
    var form = FormApp.getActiveForm();
    form.setAcceptingResponses(true);
}


Date.prototype.parsedDate = function () {
    // In order to compare 2 dates where seconds dont matter
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    var hh = this.getHours();
    var min = this.getMinutes();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd,
    (hh > 9 ? '' : '0') + hh,
    (min > 9 ? '' : '0') + min
    ].join('');
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function OpenExamAt() {
    var currtime = new Date();
    while (currtime.parsedDate() !== form_open_time.parsedDate()) {
        console.log("Not Yet");
        console.log(new Date());
        currtime = new Date();
    }
    open_form()
}


function CloseExamAt() {
    var form = FormApp.getActiveForm();
    var currtime = new Date();
    while (currtime.parsedDate() !== form_close_time.parsedDate()) {
        console.log("Not Yet");
        console.log(new Date());
        currtime = new Date();
    }
    close_form()
}

function open_closeAt() {
    OpenExamAt()
    CloseExamAt()
}

