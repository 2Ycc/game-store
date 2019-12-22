/**
 * 此函数绑定在问卷调查页面的提交按钮上
 * 执行此函数会检查问卷的题目是否做完
 * 定义count计数器为4时也就是四个单选题都选择时
 * 提示提交成功
 */
function submit(){
    var check = document.getElementsByClassName("option");
    var count = 0;
    for(var i=0; i<check.length; i++){
        if(check[i].checked)
            count++;
    }
    if(count == 4){
        alert("提交成功！感谢您的反馈！");
    }else{
        alert("您有"+(4-count)+"道选择未填写，请再检查一下吧~~");
    }
}