let data = ["добра", "много радости", "счастья", "быть красивой"];
let len = 0;
let speed=150;
for (let i = 0; i < data.length; ++i) len += 2*data[i].length;
len += 4*data.length;

function type() {
    let p=0;
    for (let i = 0; i < data.length; ++i) {
        let x = 0;
        while (x <= data[i].length) {
            let y=x;
            setTimeout(()=>{
                document.getElementById('typewriter').innerHTML=`${data[i].substr(0,y)}`
            },p*speed)
            ++x,++p;
        }
        --x,p+=2;
        while (x >= 0) {
            let y=x;
            setTimeout(()=>{
                document.getElementById('typewriter').innerHTML=`${data[i].substr(0,y)}`
            },p*speed)
            --x,++p;
        }
    }
    setTimeout(() => {
        type();
    }, len * speed);
}
type();

window.onload = function () {
    var falling = true;

    TweenLite.set("#container",{perspective:600})
    TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

    var total = 20;
    var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

    for (i=0; i<total; i++){ 
        var Div = document.createElement('div');
        TweenLite.set(Div,{attr:{class:'dot'},x:R(0,900),y:R(-500,-450),z:R(-200,200)});
        container.appendChild(Div);
        animm(Div);
    }

    function animm(elm){   
        TweenMax.to(elm,R(6,15),{y:h,ease:Linear.easeNone,repeat:-1,delay:-15});
        TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
        TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
    };

    function R(min,max) {return min+Math.random()*(max-min)};

    let animation = anime({
        targets: '.letter',
        opacity: 1,
        translateY: 50, 
        // rotate: {
        //   value: 360,
        //   duration: 2000,
        //   easing: 'easeInExpo'
        // }, 
        // scale: anime.stagger([0.7, 1], {from: 'center'}), 
        delay: anime.stagger(100, {start: 1000}), 
        translateX: [-10, 30]
      });
}