
let 灯 = new 灯光()
let btnArr=document.querySelectorAll(".control div")


let 总开关=btnArr[0]
let 总开关图 = 总开关.querySelector('img');

let 灯组=document.querySelectorAll(".light")
let 风扇=document.querySelectorAll(".circle")
let 顶 = document.querySelector('.up');

灯.灯组=灯组
灯.风扇=风扇

let 灯数组 = [...btnArr].slice(3,7)
let 风扇组 = [...btnArr].slice(7,10)


btnArr.forEach( (div,i)=>{

    switch(i){
        case 0: //总开关
            总控制(div)
            break;
        case 1:
        case 2: 
        case 10: 
            break;
        case 3: //灯光
        case 4:
        case 5:
        case 6:
            控制灯光(div,i-3)
            break;
        
        case 7: //风扇
        case 8:
        case 9:
            控制风扇(div,i-7)
            break;
    }//switch(i)


});


function 控制灯光(div,n){
 
    div.addEventListener("click",()=>{
        灯.排灯状态[n] = !灯.排灯状态[n]
        灯数组[n].classList.toggle("active")

        if(灯.排灯状态[n]==true&&灯.总开关状态==true){
            灯组[n].classList.toggle("white-light")
        }
        else if(灯.排灯状态[n]==false&&灯.总开关状态==true){
            灯组[n].classList.toggle("white-light")
        }

        console.log( div )
        let img = div.querySelector('img');
        console.log( img )
        let imgURL =``
        let currentSrc = new URL(img.src).pathname;

        if (currentSrc.endsWith('/close-red.jpg')) {
            imgURL  = './img/open-red.jpg'
        }else if (currentSrc.endsWith('/open-red.jpg')) {
            imgURL  = './img/close-red.jpg'
        }else if (currentSrc.endsWith('/close-green.jpg')) {
            imgURL  = './img/open-green.jpg'
        }else if (currentSrc.endsWith('/open-green.jpg')) {
            imgURL  = './img/close-green.jpg'
        }else if (currentSrc.endsWith('/close-black.jpg')) {
            imgURL  = './img/open-black.jpg'
        }else if (currentSrc.endsWith('/open-black.jpg')) {
            imgURL  = './img/close-black.jpg'
        }

        img.src = imgURL 
    })

}//控制灯光(div)


function 总控制(div){
    div.addEventListener("click", () => {
        console.log('Collectivity button clicked');
    
        // 提取文件名进行比较
        let currentSrc = new URL(总开关图.src).pathname;
        if (currentSrc.endsWith('/up.jpg')) {
            总开关图.src = './img/down.jpg'; 
            console.log('Switched to down.jpg'); 
        } else {
            总开关图.src = './img/up.jpg';
            console.log('Switched to up.jpg');
        }
        灯.总开关状态 = !灯.总开关状态
        div.classList.toggle("active")
        顶.classList.toggle("red-border");

        if (灯.总开关状态) {
            // 灯.总闸开(灯.排灯状态, 灯.灯组, "white-light")
            // 灯.总闸开(灯.风扇状态, 灯.风扇, "rotate-fan")
            灯.总闸开(灯.排灯状态, 灯.灯组, "white-light")
            灯.总闸开(灯.风扇状态, 灯.风扇, "rotate-fan")
        }
        else {
            灯.总闸关()
        }
    })
}//总控制(div)

///---------  风扇 ------------
function 控制风扇(div,n){
    div.addEventListener("click",()=>{
        灯.风扇状态[n] = !灯.风扇状态[n]
        风扇组[n].classList.toggle("active")

        if(灯.风扇状态[n]==true&&灯.总开关状态==true){
            灯.风扇转(n)
        }
        else if(灯.风扇状态[n]==false&&灯.总开关状态==true){
            灯.风扇转(n)
        }

        // 切换图片
        let 总开关图 = div.querySelector('img');
        let currentSrc = new URL(总开关图.src).pathname;
        if (currentSrc.endsWith('/close-black.jpg')) {
            总开关图.src = './img/open-black.jpg';
            console.log('Switched to open.jpg');
        } else {
            总开关图.src = './img/close-black.jpg';
            console.log('Switched to close.jpg');
        }
    })

}//控制风扇(div,n)

var mywin;
function 打开窗口(){
    mywin = window.open('../教室3D_罗毅/3D.html', '_blank');
    if (mywin) {
        console.log('新窗口已成功打开');
    } else {
        console.log('未能打开新窗口，可能被阻止了');
    }
}
