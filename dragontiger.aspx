﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="dragontiger.aspx.cs" Inherits="dragontiger" %>
<!DOCTYPE html>
<html lang="en">
<head runat="server">
    <title>Dragon Tiger</title>
    <link href="asset/css/map.css" rel="stylesheet" type="text/css" />
    <link href="asset/css/bet.css" rel="stylesheet" type="text/css" />
    <link href="asset/css/chip.css" rel="stylesheet" type="text/css" />
    <script src="asset/source/JQ.js" charset="utf-8" type="text/javascript"></script>
    <script src="asset/source/JQ_marquee.js" charset="utf-8" type="text/javascript"></script>
</head>
<body>
    <div class="background">
        <div id="txt_servername" class="txt_white">B1</div>
        <div id="txt_currentdatetime" class="txt_white"></div>
        <div id="txt_tablelimit" class="txt_white">Table Limit 1 - 500</div>
        <div id="running_news" class="txt_white marquee">NEWS: Im Eason Chow , Good to see you , good luck have fun.</div>
        <div id="pnl_records">
            <div id="pnl_info" class="panel">INFO</div>
            <div id="pnl_roads" class="panel panel_selected">ROADS</div>
            <div id="pnl_winpool" class="panel">WIN/POOL</div>
        </div>
        <div id="txt_username" class="txt_white">Eason chow</div>
        <div id="txt_betlimit" class="txt_white">10 - 1,000</div>
        <div id="txt_18-25" class="txt_white">18 - 25</div>
        <div id="txt_pending" class="txt_white">0</div>
        <div id="txt_confirmed" class="txt_white">0</div>
        <div id="txt_totalwin" class="txt_white">0</div>
        <div id="txt_dragonresult">4</div>
        <div id="txt_tigerresult">9</div>
        <div id="txt_countdown">10</div>
        <div id="tbl_bet">
            <div class="d_big view_win"></div>
            <div class="d_small view_bet"></div>
            <div class="d_odd"></div>
            <div class="d_even"></div>
            <div class="d_black"></div>
            <div class="d_red"></div>
            <div class="d_pikes"></div>
            <div class="d_tiles"></div>
            <div class="d_clovers"></div>
            <div class="d_hearts"></div>
            <div class="d_dragon"></div>
            <div class="fair_tie"></div>
            <div class="t_tiger"></div>
            <div class="t_big"></div>
            <div class="t_small"></div>
            <div class="t_odd"></div>
            <div class="t_even"></div>
            <div class="t_black"></div>
            <div class="t_red"></div>
            <div class="t_pikes"></div>
            <div class="t_tiles"></div>
            <div class="t_clovers"></div>
            <div class="t_hearts"></div>
        </div>
        <div id="btn_setting"></div>
        <div id="pnl_setting"></div>
        <div id="btn_viewsize_add"><img src="asset/img/viewsize_add.png" /></div>
        <div id="btn_viewsize_minus"><img src="asset/img/viewsize_minus.png" /></div>
        <div id="btn_system"></div>
        <div id="pnl_balance">
            <div id="txt_balance" class="txt_white">8,888,888</div>
            <div id="btn_chkbalance"></div>
        </div>
        <div id="btn_write"></div>
        <div id="btn_clear" class="btn_2"></div>
        <div id="btn_undo" class="btn_2"></div>
        <div id="btn_sameasprev" class="btn_2"></div>
        <div id="btn_confirm" class="btn_2"></div>
        <div id="btn_arrow_left"></div>
        <div id="pnl_chip">
            <div id="btn_chip_10" class="chip" title="10"></div>
            <div id="btn_chip_25" class="chip" title="25"></div>
            <div id="btn_chip_100" class="chip" title="100"></div>
            <div id="btn_chip_500" class="chip" title="500"></div>
            <div id="btn_chip_1000" class="chip" title="1000"></div>
        </div>
        <div id="btn_arrow_right"></div>
    </div>
    <script src="asset/js/map.js" charset="utf-8" type="text/javascript"></script>
    <script src="asset/js/event.js" charset="utf-8" type="text/javascript"></script>
</body>
</html>

