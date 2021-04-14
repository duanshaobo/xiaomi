window.onload=function(){
    // --------------轮播图--------------//
    // 1-获取元素
    var left=document.querySelector('.left-arrow');
    var right=document.querySelector('.right-arrow');
    var slider=document.querySelector('.slider');
    var imgs=slider.querySelectorAll('img');
    var lis=slider.querySelectorAll('li');
    // 记录图片索引
    var index=0;
    var len=imgs.length;
    left.onclick=function(){
        index--;
        if(index<0){
            index=len-1;
        }
        
        for(var i=0;i<len;i++){
            // 隐藏所有图片
            imgs[i].style.display='none';
            // 移除所有小圆点的高亮类名
            lis[i].className='';
        }
        // 显示当前索引对应的图片
        imgs[index].style.display='block';
        // 给当前显示的图片对应的小圆点添加高亮类名
        lis[index].className='current'
    }
    right.onclick=function(){
        // 更新图片索引
        index++;
        if(index>len-1){
            index=0;
        }
        for(var i=0;i<len;i++){
            // 隐藏所有图片
            imgs[i].style.display='none';
             // 移除所有小圆点的高亮类名
             lis[i].className='';
        }
        // 显示当前索引对应的图片
        imgs[index].style.display='block';
        // 给当前显示的图片对应的小圆点添加高亮类名
        lis[index].className='current'
    }
    // 给小圆点注册点击事件
    for(var k=0;k<len;k++){
        // 手动编号
        lis[k].index=k;
        lis[k].onclick=function(){
            // 获取当前点击的小圆点的编号
            var index=this.index;
            
            for(var j=0;j<len;j++){
                // 隐藏所有图片
                imgs[j].style.display='none';
                // 移除小圆点的高亮样式类名
                lis[j].className='';
            }
            // 显示当前被点击的小圆点对应的图片
            imgs[index].style.display='block';
            // 高亮显示被点击的小圆点
            lis[index].className='current';

        }
    }
    // 自动轮播
    var timer=run();
    // 鼠标进入, 停止图片切换, 鼠标离开, 继续切换图片
    slider.onmouseover=function(){
        // 清除定时器
        clearInterval(timer)
    }
    slider.onmouseleave=function(){
        // 重新开启定时器
        timer=run();
    }

    // 自动切换图片的函数
    function run(){
        var timerId=setInterval(function(){
            // 更新index索引
            index++;
            if(index>len-1){
                index=0;
            }
            
            for(var i=0;i<len;i++){
                // 切换图片
                imgs[i].style.display='none';
                // 点亮对应的小圆点
                lis[i].className='';
            }
            imgs[index].style.display='block';
            // 点亮对应的小圆点
            lis[index].className='current';
        },1500);
        return timerId;
    }


    // --------- 小米闪购-倒计时 ---------//
    var hour=document.querySelector('.hour');
    var minute=document.querySelector('.minute');
    var second=document.querySelector('.second');

     var countDownTimer=setInterval(function(){
        // 2020-07-04
        // 获取目标之间的Unix时间戳
        var targetTime=+new Date('2020-07-04');
        // 获取当前的Unix时间戳
        var currTime=+new Date(); 
        // 计算时间差:毫秒值/1000=>秒数
        var duration=parseInt((targetTime-currTime)/1000);
        if(duration<=0){
            clearInterval(countDownTimer);
        }
        // 计算毫秒值对应的小时
        var h=parseInt(duration/3600);
        // 计算毫秒值对应的分钟
        var m=parseInt(duration%3600/60);
        // 计算毫秒值对应的秒数
        var s=parseInt(duration%3600%60);
        h=h>10?h:'0'+h;
        m=m>10?m:'0'+m;
        s=s>10?s:'0'+s;
        // console.log(h,m,s);
        hour.innerHTML=h;
        minute.innerHTML=m;
        second.innerHTML=s;
     },1000);   
    

}