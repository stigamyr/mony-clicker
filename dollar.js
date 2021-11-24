var dollars = 0;
var lemo = 0;
var pizza = 0;
var avis  = 0;
var lemon_price = 10;
var avis_price = 10; 
var bitcoin = 0;
var divEL = document.querySelector("button")
var rotasjon = 
var fart = 1
var bitcoin_price = 250

var html_coin = "<div class='btc' id= 'con'> <img src='bitcoin.png' alt=''  id='bitcoinm' style='width:150px'  title=''></div>";



var intervaldId = window.setInterval(function(){
    // all kode her kjøres 10 ganger i sekundet
    document.getElementById("dollar_earnd").innerHTML=dollars;
    
}, 100);



var intervaldId = window.setInterval(function(){
    // all kode her kjøres 10 ganger i sekundet
    document.getElementById("dollar_earnd").innerHTML=dollars;
    add_lemon();
    add_pizza();
    add_news();
    add_coin();
}, 1000);


// leher till dollars til he taggen ver gang du klikker på dollar

function add_coin(){
    
    dollars += 1* bitcoin
}




function buy_bitcoin(){

    if(dollars >= bitcoin_price ){
        bitcoin += 100;
        dollars -= bitcoin_price;
        bitcoin_price *= 5,5;
        document.getElementById("bitcoin_price").innerHTML = bitcoin_price + "$";
        document.getElementById("con").innerHTML += html_coin;
     
    }

}

function add_lemon() {
    
     
      dollars +=  1* lemo;


}



function click_dollar(){
dollars++;


function animer(){

   rotasjon += fart
       
   
divEL.style.transform="rotate("+ rotasjon+"deg)";
requestAnimationFrame(animer);
if(rotasjon = 360){
    rotasjon = true;
}
}
animer();


}
 


function buy_lemon(){
    if(dollars >= lemon_price ){
        lemo += 1;
        dollars -= lemon_price;
        lemon_price *= 5,5;
        console.log(dollars);
    }
    
}
function add_news(){
   dollars += 1* avis;
}


function buy_avis(){

    if(dollars >= avis_price){
        avis += 5;
        dollars -= avis_price;
        avis_price *= 10.10;
        document.getElementById("avis_price").innerHTML =  avis_price + "$";
    }
}



  function add_pizza(){
      dollars += 10 * pizza
  }


 

