var currentSelectedChip;
$(document).ready(function () {
    $('#btn_setting').click(function () { $('#pnl_setting').slideToggle() });
    $('#pnl_info , #pnl_roads , #pnl_winpool').click(function () { tab_result(this); });
    $('#btn_chip_10 , #btn_chip_25, #btn_chip_100, #btn_chip_500, #btn_chip_1000').click(function () { selectChip(this) });
    $('#btn_chkbalance').click(function () { });
    $('#btn_write').click(function () { });
    $('#btn_clear').click(function () { });
    $('#btn_undo').click(function () { });
    $('#btn_sameasprev').click(function () { });
    $('#btn_confirm').click(function () { });
    $('#btn_viewsize_add , #btn_viewsize_minus').click(function () { windowResize(this); });
    $('#btn_arrow_left , #btn_arrow_right').click(function () { nextPrevChips(this); });
    $('.d_odd').click(function(){chipOnTable(currentSelectedChip,this)})
});

function tab_result(e) {
    $(e).parent().children('div').each(function () {
        if ($(this).hasClass('panel_selected'))
            $(this).removeClass('panel_selected');
    });
    $(e).addClass('panel_selected');
}

function selectChip(e) {
    $(e).parent().children('div').each(function () {
        if ($(this).hasClass('chip_' + currentSelectedChip + '_selected'))
            $(this).removeClass('chip_' + currentSelectedChip + '_selected')
    });
    currentSelectedChip = parseInt($(e).attr('id').replace(/[^\d.]/g, ''), 10);
    $(e).addClass('chip_' + currentSelectedChip + '_selected')
}

function chipOnTable(e,table) {

}

function nextPrevChips(e) {
    var id = $(e).attr('id');
    var addOrMinus;
    addOrMinus = id == 'btn_arrow_left' ? '+' : '-';
    if ($('#btn_chip_10').position().left < 0 & addOrMinus == '-') return;
    if ($('#btn_chip_10').position().left > -70 & addOrMinus == '+') return;
    $('#btn_chip_10').animate({ left: addOrMinus + "=70", bottom: addOrMinus + "=0" }, 500);
    $('#btn_chip_25').animate({ left: addOrMinus + "=74", bottom: addOrMinus + "=7" }, 500);
    $('#btn_chip_100').animate({ left: addOrMinus + "=78", bottom: addOrMinus + "=14" }, 500);
    $('#btn_chip_500').animate({ left: addOrMinus + "=78", bottom: addOrMinus + "=14" }, 500);
    $('#btn_chip_1000').animate({ left: addOrMinus + "=74", bottom: addOrMinus + "=19" }, 500);

}

function windowResize(e) {
    var prevSize = parseInt(window.parent.document.body.style.zoom, 10);
    var newSize = isNaN(prevSize) ? 100 : prevSize;
    var id = $(e).attr('id');
    var addOrMinus = id == 'btn_viewsize_add' ? true : false;
    window.parent.document.body.style.zoom = addOrMinus ? (newSize + 5) + '%' : (newSize - 5) + '%';
}

function getUrlString(e) {
    var reg = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); else return "";
}


var filterInt = function (e) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(e))
        return Number(e);
    return NaN;
}