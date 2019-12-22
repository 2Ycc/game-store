/**
 * 绑定在survey.html页面的“返回首页”按钮，保存用户名在跳转时不丢失
 */
function keepValue_survey(){
    var testStr = window.location.search;
    var content = testStr.match(/\?(\S*)/);
    if(content!=undefined) {
        window.location.href="index.html"+"?"+content[1];
    }else window.location.href="index.html";
}

/**
 * 绑定在index.html页面上的”问卷调查“选项，保存用户名在跳转时不丢失
 */
function keepValue_index(){
    var testStr = window.location.search;
    var content = testStr.match(/\?(\S*)/);
    if(content!=undefined) {
        window.location.href="survey.html"+"?"+content[1];
    }else alert("请先登录！");
}