/**
 * Created by Administrator on 2015/10/27.
 */
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