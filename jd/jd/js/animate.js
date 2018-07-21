/**
 * Created by Administrator on 2018/4/27 0027.
 */
/*函数的功能：定时器封装动画
* 函数的形参：element移动元素，target移动的目标位置，step移动的步长
* 函数返回值：无*/
function animate(element,target,step) {
    //判断此元素是否已经有定时器
    if(element.timerId){
        clearInterval(element.timerId);
        element.timerId = null;
    }
    element.timerId = setInterval(function () {
        var current = element.offsetLeft;
        //判断如果当前位置>目标位置 则步长step< 0
        if(current > target){
            step = - Math.abs(step);
        }
        //元素需要移动的距离小于步长，则直接到达目标位置，并清空定时器
        if(Math.abs(current - target) < Math.abs(step)){
            //让定时器停止
            clearInterval(element.timerId);
            element.style.left = target + 'px';
            return;
        }else {
            //移动盒子
            current += step;
            element.style.left = current + 'px';
        }
    },30);
}