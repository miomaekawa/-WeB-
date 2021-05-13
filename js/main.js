'use strict'
// document.addEventListener('DOMContentLoaded', () => {

// 高さいっぱいの要素を表示する
// 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
let vh = window.innerHeight * 0.01;
// カスタム変数--vhの値をドキュメントのルートに設定
document.documentElement.style.setProperty('--vh', `${vh}px`);

// resizeイベントの取得
// window.addEventListener('resize', () => {
//   // あとは上記と同じスクリプトを実行
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });



let screen_w = window.innerWidth;//ウィンドウの幅を取得する
let screen_h = window.innerHeight;//ウィンドウの高さを取得する

// const KAMI_MAX0= 300;     // mv用
const KAMI_MAX4= 10;     // box1
const KAMI_MAX1= 10; // about us用
const KAMI_MAX2= 10; // 志用
const KAMI_MAX3= 10; //arabesuku
const KAMI_MAX5= 10; //teacher
const KAMI_MAX6= 10; //hiyori
const KAMI_MAX7= 10; //toushoses
const KAMI_MAX8= 10; //yoshie
const KAMI_MAX9= 10; //aogu
const KAMI_MAX10= 10; //box8
const KAMI_MAX11= 10; // 志用_sp



function rand(min,max)
{
    return ( Math.floor(Math.random()*(max-min+1)+min));
}

class Kami
{
    constructor(id)
    {

        console.log(id);


        let elm = document.createElement("div");


        // mv用
        if(id === 0){
            // .mvに追加
            document.querySelector('.mv').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,200);
            this.y = rand(0,screen_h);
            this.vx = rand(-10,10);
            this.vy = rand(5,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }

        // box1
        if(id === 4){
            document.querySelector('.box1').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }


        // about us用
        else if(id === 1){
            document.querySelector('#about-us').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
        // 志用
        else if(id === 2){
            document.querySelector('.k_pic2_pc').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
        // arabesuku用
        else if(id === 3){
            document.querySelector('.arabesuku').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
        // Teacher
        else if(id === 5){
            document.querySelector('.teacher').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/4);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
        // hiyori
        else if(id === 6){
            document.querySelector('.hiyori').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
        // toushoses
        else if(id === 7){
            document.querySelector('.toushoses').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
        // yoshie
        else if(id === 8){
            document.querySelector('.yoshie').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
        // aogu
        else if(id === 9){
            document.querySelector('.aogu').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
        // box8
        else if(id === 10){
            document.querySelector('.box8').appendChild(elm);
            this.sty = elm.style;
            this.x = rand(0,screen_w/2);
            this.y = rand(0,screen_h/2);
            this.vx = rand(-10,0);
            this.vy = rand(0,10);
            this.ang = 0;
            this.spd = rand(15,40);
            this.rX = rand(0,10)/10;
            this.rY = rand(0,10)/10;
            this.rZ = rand(0,10)/10;
            this.sty.position = "absolute";
            this.sty.width = "8px";
            this.sty.height = "4px";
            this.sty.backgroundColor = "white";
        }
                  // 志用_sp
            else if(id === 11){
                document.querySelector('.k_pic2_sp').appendChild(elm);
                this.sty = elm.style;
                this.x = rand(0,screen_w/2);
                this.y = rand(0,screen_h/2);
                this.vx = rand(-10,0);
                this.vy = rand(0,10);
                this.ang = 0;
                this.spd = rand(15,40);
                this.rX = rand(0,10)/10;
                this.rY = rand(0,10)/10;
                this.rZ = rand(0,10)/10;
                this.sty.position = "absolute";
                this.sty.width = "8px";
                this.sty.height = "4px";
                this.sty.backgroundColor = "white";
            }
    }












update4()//box
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 400;
        this.y = -20;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}



update1()//About_us
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 450;
        this.y = 20;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}
update2()//志
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 500;
        this.y = 100;
    }
    this.ang += this.spd-20;
    this.sty.right = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}
update3()//arabesku
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 300;
        this.y = 0;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
    if(this.y>=screen_h);
}

update5()//teacher
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 500; // ここ変更しました
        this.y = 0; // ここ変更しました
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}



update6()//hiyori
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 360;
        this.y = 0;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}
update7()//toshoues
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 400;
        this.y = -100;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}
update8()//yoshie
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 350;
        this.y = 0;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}
update9()//aogu
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x = 400;
        this.y = -50;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}
update10()//Box8
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x =360;
        this.y = -70;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}
//志_sp
update11()
{   
    this.x += this.vx;
    this.y += this.vy;
    if(this.y>=screen_h)
    {
        this.x =400;
        this.y =-100;
    }
    this.ang += this.spd;
    this.sty.left = this.x + "px";
    this.sty.top = this.y + "px";
    this.sty.transform = "rotate3D("
    +this.rX  + "," + this.rY + ","
    +this.rZ  + "," + this.ang + "deg)";
}

}
    

// // mv用
// let kami0 = [];

// box用
let kami4 = [];

// about us用
let kami1 = [];

// 志用
let kami2 = [];

//arabesku
let kami3 = [];

//teacher
let kami5 = [];

//hiyori
let kami6 = [];

//toshoses
let kami7 = [];

//yoshie
let kami8 = [];

//aogu
let kami9 = [];

//box8
let kami10 = [];

//志_sp
let kami11 = [];


// for(let i=0;i<KAMI_MAX0;i++) {
//     kami0.push(new Kami(0));

// }

for(let i=0;i<KAMI_MAX4;i++) {
    kami4.push(new Kami(4));
}
for(let i=0;i<KAMI_MAX1;i++) {
     kami1.push(new Kami(1));
}

for(let i=0;i<KAMI_MAX2;i++) {
     kami2.push(new Kami(2));
}

for(let i=0;i<KAMI_MAX3;i++) {
     kami3.push(new Kami(3));
}

for(let i=0;i<KAMI_MAX5;i++) {
     kami5.push(new Kami(5));
}

for(let i=0;i<KAMI_MAX6;i++) {
     kami6.push(new Kami(6));
}

for(let i=0;i<KAMI_MAX7;i++) {
     kami7.push(new Kami(7));
}

for(let i=0;i<KAMI_MAX8;i++) {
     kami8.push(new Kami(8));
}

for(let i=0;i<KAMI_MAX9;i++) {
     kami9.push(new Kami(9));
}

for(let i=0;i<KAMI_MAX10;i++) {
     kami10.push(new Kami(10));
}

for(let i=0;i<KAMI_MAX11;i++) {
     kami11.push(new Kami(11));
}

setInterval(mainLoop, 1000/20);

function mainLoop()
{
    // for(let i=0;i<KAMI_MAX0;i++) {
    //     kami0[i].update0();
    // }
    for(let i=0;i<KAMI_MAX4;i++) {
        kami4[i].update4();
    }
    for(let i=0;i<KAMI_MAX1;i++) {
        kami1[i].update1();
    }
    for(let i=0;i<KAMI_MAX2;i++) {
        kami2[i].update2();
    }
    for(let i=0;i<KAMI_MAX3;i++) {
        kami3[i].update3();
    }
    for(let i=0;i<KAMI_MAX5;i++) {
        kami5[i].update5();
    }
    for(let i=0;i<KAMI_MAX6;i++) {
        kami6[i].update6();
    }
    for(let i=0;i<KAMI_MAX7;i++) {
        kami7[i].update7();
    }
    for(let i=0;i<KAMI_MAX8;i++) {
        kami8[i].update8();
    }
    for(let i=0;i<KAMI_MAX9;i++) {
        kami9[i].update9();
    }
    for(let i=0;i<KAMI_MAX10;i++) {
        kami10[i].update10();
    }
    for(let i=0;i<KAMI_MAX11;i++) {
        kami11[i].update11();
    }


}



        // mv 暗転から明転 animate,1000で1秒 
        function blackout() {
            $('#navi-mv').show().animate({'opacity':1}, 3000, 'swing', function() {
                $('div#blackout').animate({'opacity':0},3000, 'swing', function() {
                    $('div#blinklayer').hide;
                });
            });
        } 
        // 実行する命令を書いてあげる
        $(function(){
            blackout();
        });

       

        // fadeIn fadeOut
        //about-us
        $(function (){
        const about_moviePos = $('.about-us_mv').offset().top;
        const wh = $(window).height();
    
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > about_moviePos - wh + 200){
                // 動画5秒で消えてスペース消滅
                // $('.about-us_mv').fadeOut(5000); 
                $('.first').fadeIn(1000);
                // 動画5秒でopacity0になって消える
                $("#about-us_mv").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
                // 何秒かけてfadeInする

            } 
        
        });
    

        //kokorozashi
        const kokorozashiPos = $('.kokorozashi_mv').offset().top;
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > kokorozashiPos - wh + 200){
                // $('.kokorozashi_mv').fadeOut(5000);
                $("#kokorozashi_mv").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
            } 
        
        });  

        //yuki
        const yukiPos = $('.yuki_mv').offset().top;
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > yukiPos - wh + 200){
                // $('.yuki_mv').fadeOut(5000);
                $("#yuki_mv").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
            } 
        
        });

        //history_mv
        const historyPos = $('.history_mv').offset().top;
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > historyPos - wh + 200){
                // $('.history_mv').fadeOut(5000);
                $("#history_mv").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
            } 
        
        }); 

        //nextstage
        const nextstagePos = $('.nextstage_mv').offset().top;
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > nextstagePos - wh + 200){
                // $('.nextstage_mv').fadeOut(5000);
                $("#nextstage_mv").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
            } 
        
        });   

        //dance-studio_mv
        const dancestudioPos = $('.dance-studio_mv').offset().top;
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > dancestudioPos - wh + 200){
                // $('.dance-studio_mv').fadeOut(5000);
                $("#dance-studio_mv").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
            } 
        
        });   

        //faq_mv
        const faqPos = $('.faq_mv').offset().top;
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > faqPos - wh + 200){
                // $('.faq_mv').fadeOut(5000);
                $("#faq_mv").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
            } 
        
        });   

        //contact_mv
        const contactPos = $('.contact_mv').offset().top;
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > contactPos - wh + 200){
                // $('.contact_mv').fadeOut(5000);
                $("#contact_mv").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
            } 
        
        });   

        //box9
        const box9Pos = $('.box9').offset().top;
        $(window).on('load scroll', function() {
            if($(this).scrollTop() > box9Pos - wh + 200){
                // $('.box9').fadeOut(5000);
                $("#box9").animate({ opacity: 0 }, { duration: 5000, easing: 'swing'})
            } 
        
        });   

     



        //スクロールで画像がfadeIn
        $(window).on('load scroll', () => {
            //fadeIn animetion
            let fadeIn = $('.fadeIn');

            fadeIn.each(function () {
                let boxOffset = $(this).offset().top;
                let scrollPos = $(window).scrollTop();
                let wh = $(window).height();

                if (scrollPos > boxOffset - wh + 100) {
                    $(this).addClass('animated');
                }
        });

    });

       //ヘッダーのスクロール
       $(window).on('load scroll', () => {
        //fadeIn animetion
        let fadeIn = $('.header_scroll');

        fadeIn.each(function () {
            let boxOffset = $(this).offset().top;
            let scrollPos = $(window).scrollTop();
            let wh = $(window).height();

            if (scrollPos > boxOffset + 200 ) { // 高さ調整
                $(this).addClass('header_animated');
            }



            
    });

});
       //ハンバーガーメニューのスクロールfadeIn
       $(window).on('load scroll', () => {
        //fadeIn animetion
        let fadeIn = $('.menu-trigger');
        // let boxOffset = $(fadeIn).offset().top;
        let scrollPos = $(window).scrollTop();

        if (scrollPos >  300 ) { // 高さ調整
            $(fadeIn).addClass('header_animated');
        }

 

});

        // トップボタンをfixさせる

        $(function() {
            var pagetop = $('.top');   
            pagetop.hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
                    pagetop.fadeIn();
                } else {
                    pagetop.fadeOut();
                }
            });
            pagetop.click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500); //0.5秒かけてトップへ移動
                return false;
            });
        });
    



    // 




            // ページトップボタン
            $(function(){
                var pagetop = $('.top');
                pagetop.click(function () {
                $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
                });
            });


            
        // History_Slick
        $(function() {
            $('.thumb-item').slick({
                //  infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.thumb-item-nav' //サムネイルのクラス名
            });
            $('.thumb-item-nav').slick({
                //  infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.thumb-item', //スライダー本体のクラス名
                focusOnSelect: true,
            });
        });// JavaScript Document

        // スクロールでh2が下から現れたら各h2をアニメーション
        $(window).on('scroll load', function (){

            /* eachメソッドでscroll-effectクラス全ての要素を見にいく */
        
            $('.h2anime').each(function(){
        
                // 要素の高さを取得
                let targetPos = $(this).offset().top;
        
                // スクロールの値を取得
                let scroll = $(window).scrollTop();
        
                // ウインドウの高さを取得
                let windowHeight = $(window).height();
        
                // ターゲットが可視範囲に入ったらstartanimeクラスを付与
                if (scroll > targetPos - windowHeight+100){
                    $(this).addClass('startanime');
                }
        
            });
        
        });
        // スクロールでh3が下から現れたら各h3をアニメーション
        $(window).on('scroll load', function (){

            /* eachメソッドでscroll-effectクラス全ての要素を見にいく */
        
            $('.h3anime').each(function(){
        
                // 要素の高さを取得
                let targetPos = $(this).offset().top;
        
                // スクロールの値を取得
                let scroll = $(window).scrollTop();
        
                // ウインドウの高さを取得
                let windowHeight = $(window).height();
        
                // ターゲットが可視範囲に入ったらstartanimeクラスを付与
                if (scroll > targetPos - windowHeight+100){
                    $(this).addClass('startanime_h3');
                }
        
            });
        
        });
        // スクロールでh4が下から現れたら各h4をアニメーション
        $(window).on('scroll load', function (){

            /* eachメソッドでscroll-effectクラス全ての要素を見にいく */
        
            $('.h4anime').each(function(){
        
                // 要素の高さを取得
                let targetPos = $(this).offset().top;
        
                // スクロールの値を取得
                let scroll = $(window).scrollTop();
        
                // ウインドウの高さを取得
                let windowHeight = $(window).height();
        
                // ターゲットが可視範囲に入ったらstartanimeクラスを付与
                if (scroll > targetPos - windowHeight+100){
                    $(this).addClass('startanime_h4');
                }
        
            });
        
        });
        // スクロールでh5が下から現れたら各h5をアニメーション
        $(window).on('scroll load', function (){

            /* eachメソッドでscroll-effectクラス全ての要素を見にいく */
        
            $('.h5anime').each(function(){
        
                // 要素の高さを取得
                let targetPos = $(this).offset().top;
        
                // スクロールの値を取得
                let scroll = $(window).scrollTop();
        
                // ウインドウの高さを取得
                let windowHeight = $(window).height();
        
                // ターゲットが可視範囲に入ったらstartanimeクラスを付与
                if (scroll > targetPos - windowHeight+100){
                    $(this).addClass('startanime_h5');
                }
        
            });
        
        });

        // スクロールでh6が下から現れたら各h6をアニメーション
        $(window).on('scroll load', function (){

            /* eachメソッドでscroll-effectクラス全ての要素を見にいく */
        
            $('.h6anime').each(function(){
        
                // 要素の高さを取得
                let targetPos = $(this).offset().top;
        
                // スクロールの値を取得
                let scroll = $(window).scrollTop();
        
                // ウインドウの高さを取得
                let windowHeight = $(window).height();
        
                // ターゲットが可視範囲に入ったらstartanimeクラスを付与
                if (scroll > targetPos - windowHeight+100){
                    $(this).addClass('startanime_h6');
                }
        
            });
        
        });

        // スクロールでh7が下から現れたら各h7をアニメーション
        $(window).on('scroll load', function (){

            /* eachメソッドでscroll-effectクラス全ての要素を見にいく */
        
            $('.h7anime').each(function(){
        
                // 要素の高さを取得
                let targetPos = $(this).offset().top;
        
                // スクロールの値を取得
                let scroll = $(window).scrollTop();
        
                // ウインドウの高さを取得
                let windowHeight = $(window).height();
        
                // ターゲットが可視範囲に入ったらstartanimeクラスを付与
                if (scroll > targetPos - windowHeight+100){
                    $(this).addClass('startanime_h7');
                }
        
            });
        
        });

        // スクロールでh8が下から現れたら各h7をアニメーション
        $(window).on('scroll load', function (){

            /* eachメソッドでscroll-effectクラス全ての要素を見にいく */
        
            $('.h7anime').each(function(){
        
                // 要素の高さを取得
                let targetPos = $(this).offset().top;
        
                // スクロールの値を取得
                let scroll = $(window).scrollTop();
        
                // ウインドウの高さを取得
                let windowHeight = $(window).height();
        
                // ターゲットが可視範囲に入ったらstartanimeクラスを付与
                if (scroll > targetPos - windowHeight+100){
                    $(this).addClass('startanime_h7');
                }
        
            });
        
        });


    });



$(function(){


    // スライド1
    $('#slide1').on('click', function(){
        $('.slide_title').html('2019/04  LIVE ONE&apos;S LIFE THROUGH - Where are you going?');
    });

    // スライド2
    $('#slide2').on('click', function(){
        $('.slide_title').html('2015/08  夏 〜残暑お見舞い申し上げます');
    });

    // スライド3
    $('#slide3').on('click', function(){
        $('.slide_title').html('2013/04  想いのカケラ');
    });

    // スライド4
    $('#slide4').on('click', function(){
        $('.slide_title').html('2012/01  幸せのカタチ');
    });

    // スライド5
    $('#slide5').on('click', function(){
        $('.slide_title').html('2009/10  アエタカラ 〜I met you~');
    });

    // スライド6
    $('#slide6').on('click', function(){
        $('.slide_title').html('2008/02  みのり歴');
    });

    // スライド7
    $('#slide7').on('click', function(){
        $('.slide_title').html('2006/10  らしくいこう 〜2006〜');
    });


});




// スマホ版


// ハンバーガーメニュー開閉
  (()=>{
    // 'use strict';
  
  $(function() {
    $('.menu-trigger').on('click', function() {
      $(this).toggleClass('active');
      $('#global-nav').toggleClass('active');
      //$(this).next().toggleClass('active');
    });
  });
  
  $(function() {
    $('.nav-item').on('click', function() {
      $('#global-nav').removeClass('active');
    });
  });
  $(function() {
    $('.nav-item').on('click', function() {
      $('.menu-trigger.active').removeClass('active');
    });
  });
  
  })();


//   ローディング画面＆コールバック関数

// 実行されたら#mainを.display blockにしてね
function showMain() {
    //  $('#main').display("block");
    $('#main').show();

}

window.onload = function loading() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    showMain()
  }



//   ローディング画面%
var images = document.getElementsByTagName('img'); // ページ内の画像取得
var percent = document.getElementById('percent-text'); // パーセントのテキスト部分
var gauge = document.getElementById('gauge'); // ゲージ
var loading = document.getElementById('loadingp'); // ローディング要素
var imgCount = 0;
var baseCount = 0;
var gaugeMax = 400; // ゲージの幅指定
var current;
 
// 画像の読み込み
for (var i = 0; i < images.length; i++) {
    var img = new Image(); // 画像の作成
    // 画像読み込み完了したとき
    img.onload = function() {
        imgCount += 1;
    }
    // 画像読み込み失敗したとき
    img.onerror = function() {
        imgCount += 1;
    }
    img.src = images[i].src; // 画像にsrcを指定して読み込み開始
};
 
// ローディング処理
var nowLoading = setInterval(function() {
    if(baseCount <= imgCount) { // baseCountがimgCountを追い抜かないようにする
        // 現在の読み込み具合のパーセントを取得
        current = Math.floor(baseCount / images.length * 100);
        // パーセント表示の書き換え
        percent.innerHTML = current;
        // ゲージの変更
        gauge.style.width = Math.floor(gaugeMax / 100 * current) + 'px';
        baseCount += 1;
        // 全て読み込んだ時
        if(baseCount == images.length) {
            // ローディング要素の非表示
            loadingBg.style.display = 'none';
            loading.style.display = 'none';
            // main関数を引数にして、loading関数を実行する
            loading();
            // ローディングの終了
            clearInterval(nowLoading);
        }
    }
}, 10);




// 画面ロード後の処理
$(function() {
// 画像のクリックでサブミット処理の呼び出し

    const submitImg = document.getElementById("submit_img_wrapper")
    console.log(submitImg)
    submitImg.addEventListener("click", function() {
        console.log("click")
        const $submitBtn = $("#submit_btn");
        $submitBtn.click();
    })








/* FAQ acordion */
$(".accordion-wrap").on("click", function(){   
    $(this).children().eq(1).slideToggle(200);  
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header i").removeClass("rotate-fas");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".fas").toggleClass("rotate-fas");

    $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(200);
});



})