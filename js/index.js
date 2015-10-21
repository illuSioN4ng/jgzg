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

    //<!--************************图片轮播开始*******************-->
    var wrap=document.getElementById('wrap'),
        pic=document.getElementById('pic'),
        list=document.getElementById('list').getElementsByTagName('li'),
        index=0,
        timer=null;

    function auto(){
        timer=setInterval(function(){
            index++;
            if(index>=list.length){
                index=0;
            }
            change(index);
        },2000);
    }
    auto();

    function change(curIndex){
        pic.style.marginTop=-235*curIndex+'px';
        for(var n=0;n<list.length;n++){
            list[n].className='';
        }
        list[curIndex].className='on';
        index=curIndex;
    }
    wrap.onmouseover=function(){
        clearInterval(timer);
    }
    wrap.onmouseout=auto;
    for(var i=0;i<list.length;i++){
        list[i].id=i;
        list[i].onmouseover=function(){
            change(this.id);
        }
    }
    //<!--************************图片轮播结束*******************-->

    //<!--************************电商平台js开始*******************-->
    var tabul=document.getElementById('tab_ul'),
        tabLi=tabul.getElementsByTagName('li'),
        content = document.getElementById('ele_bussiness_content').children;
    tabLi[0].className = 'li_active';
    content[0].className = 'content_active';
    //<!--************************电商平台js结束*******************-->
    for(var i = 0; i < tabLi.length; i++){
        tabLi[i].id = i;
        tabLi[i].onclick = function(){
            for(var t=0; t<tabLi.length; t++){
                if(t != i){
                    tabLi[t].className = "";
                    content[t].className = "";
                }
            }
            this.className = "li_active";
            content[this.id].className = "content_active";
        }
    }
});