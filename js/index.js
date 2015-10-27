/**
 * Created by Administrator on 2015/10/21.
 */
<!-- search判断-->
function judge_input(){
    var input = document.getElementById('search_input');
    if(input.value.length=="")
    {
        alert('请输入搜索值');
        return false;
    }else{
        return true;
    }
}

$(document).ready(function(){
//            <!--************************导航栏JS代码开始*******************-->
    jQuery.navlevel2 = function(level1,dytime) {
        $(level1).mouseenter(function(){
            varthis = $(this);
            delytime=setTimeout(function(){
                varthis.find('ul').slideDown();
            },dytime);
        });
        $(level1).mouseleave(function(){
            clearTimeout(delytime);
            $(this).find('ul').slideUp();
        });
    };
    $.navlevel2(".nav>ul>li",200);
//            <!--************************导航栏JS代码结束*******************-->
});