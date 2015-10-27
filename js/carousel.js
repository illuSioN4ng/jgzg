/**
 * Created by Administrator on 2015/10/27.
 */
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