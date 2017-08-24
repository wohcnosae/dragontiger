var $session;
$(document).ready(function () {    
    $('#txt_currentdatetime').html(new Date().toUTCString());
    $('#btn_chip_10').addClass('chip_10_selected');
    currentSelectedChip = 10;
    setInterval(currentTime, 1000);
    setTimeout(function () { $('.d_big').removeClass('view_win') }, 3000);
    $('.marquee').marquee();
    getCredit();
});

function currentTime() { 
    time = new Date().toUTCString();
    $('#txt_currentdatetime').html(time);
}

function getCredit() {
    UserID = 1119;
    $.ajax({
        url: 'asset/ashx/getuserdata.ashx',
        data: "UserID=" + UserID,
        type: "post",
        success: function (data) {
            setTimeout(function () {
                if ((!data) || (data.length <= 0) || (data == "[null]")) {
                }
                else {
                    var dataTemp = data.substr(2, data.length - 4);
                    var json = eval("(" + dataTemp + ")");
                    $("#txt_username").html(json.loginname);
                    $("#txt_balance").html(json.creditBalance);
                    if (json.sessionID == "0") {
                        alert("Your login Session expired,\n　Please　relogin!");
                        $("body").children().remove();
                        window.close();
                        return;
                    }
                    else {
                        $session = json.sessionID;
                    }
                }
            }, 1000);
        },
        error: function () {
        }
    });
}

