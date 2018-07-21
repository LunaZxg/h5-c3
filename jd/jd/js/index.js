/**
 * Created by Administrator on 2018/4/28 0028.
 */
//获取鼠标enter的元素
var newst = document.getElementById('news-t');
// 获取移动的元素
var flag = document.getElementById('flag');
// 获取切换的内容元素
var contentl = document.getElementById('contentl');
//获取到a标签注册事件，设置动画，使其移动到相应位置
for (var i = 0; i < 2; i++){
    var link = newst.children[i];
    // 为a标签注册事件
    link.onmouseover = linkMouseover;
    link.index = i;
}
function linkMouseover() {
    // 获取当前元素的位置
    var target = this.offsetLeft;
    animate(flag,target - 3,3);
    
    // 显示详细的内容
    // 让所有的详细内容隐藏
    for(var i = 0 ,len = contentl.children.length; i < len; i++){
        var divl = contentl.children[i];
        divl.className = 'news-b hide';
       
    }
    //当前对应的详细内容显示
    var index = parseInt(this.index);
    contentl.children[index].className = 'news-b show';
}

