let html = document.querySelector('#html');
let style = document.querySelector('#style')

let string = `
/*您好，我是小雄
*接下来我演示下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid black;
    width:200px;
    height:200px;
}
/*接下来把div变成一个八卦图
*注意看好了
*首先，把div变成圆圈
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5)
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
**/
#div1{background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小珠 */
#div1::before{
 width: 100px;
 height: 100px;
 top: 0;
 left: 50%;
 transform: translateX(-50%);
 background:#000;
 border-radius:50%;
 background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%); 
   }
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {//如果是回车就不照搬,如果不是回车就照搬
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += '&nbsp'//改空格为缩进
        }
        else {
            string2 += string[n]
        }
        console.log(n)
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)
        n += 1;
        if (n >= string.length) {//n=53
            return;
        } else {
            step();
        }
    }, 0);
}
step();
