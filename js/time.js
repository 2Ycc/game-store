/**
 * 在index.html页面上实时显示时间
 */
function timer(){
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth()+1;
    var d = today.getDate();
    var h = today.getHours();
    var min = today.getMinutes();
    var s = today.getSeconds();
    min = checkTime(min);
    s = checkTime(s);
    document.getElementById('sysTime').innerHTML = y+"年"+m+"月"+d+"日"+" "+h+":"+min+":"+s;
    t = setTimeout(function(){timer()},500);
}

/**
 * 当值为单数时就在其前面加个0
 */
function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}