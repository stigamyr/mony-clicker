var dollars = 0;
var lemo = 0;
var pizza = 0;
var avis  = 0;
var lemon_price = 10;
var avis_price = 50; 
var bitcoin = 0;
var divEL = document.querySelector("button")
var rotasjon = 0;
var fart = 10;
var bitcoin_price = 250
var fps = 5;
var html_coin =  "<div class='btc' id= 'con'> <img src='bitcoin.png' alt=''  id='bitcoinm' style='width:150px'  title=''></div>";
var version = 92
var pizza_price = 900;
var tesla = 0
var tesla_price = 5000
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
    add_tesla();
}, 1000);





 window.onload = function load() {
   if(parseInt(localStorage.getItem("saved")) === version){
   if(localStorage.getItem("saved") !== null){
    
    if(localStorage["saved"] !== undefined){

    
        if(typeof(localStorage.getItem("saved")) === "string"){
      dollars = parseInt(localStorage.getItem("dollars"));
      avis_price = parseInt(localStorage.getItem("avis_price"));
      lemo = parseInt(localStorage.getItem("lemo"));
      bitcoin = parseInt(localStorage.getItem("bitcoin"));
      html_coin = parseInt(localStorage.getItem("html_coin."));
      bitcoin_price = parseInt(localStorage.getItem("bitcoin_price"));
      lemon_price = parseInt(localStorage.getItem("lemon_price"));
      pizza = parseInt(localStorage.getItem("pizza"));
      pizza_price = parseInt(localStorage.getItem("pizza_price"));
      tesla = parseInt(localStorage.getItem("tesla"));
      tesla_price = parseInt(localStorage.getItem("tesla_price"));

       console.log("Loaded!");
}
 }
 }
 }
 }


var ba = setInterval(save,100);
function save() {
    localStorage.setItem("saved", version);
   localStorage.setItem("dollars",dollars);
    localStorage.setItem("tesla_price",tesla_price);
    localStorage.setItem("lemo",lemo);
    localStorage.setItem("bitcoin",bitcoin);
    localStorage.setItem("html_coin.innerHTML",html_coin.innerHTML);
    localStorage.setItem("bitcoin_price",bitcoin_price);
    localStorage.setItem("lemon_price",lemon_price);
    localStorage.setItem("pizza",pizza);
    localStorage.setItem("pizza_price",pizza_price);
    localStorage.setItem("tesal",tesla);
    localStorage.setItem("avis_price",avis_price);

    console.log("Saved");


  
}

function reset() {

    var dollars = 0;
 lemo = 0;
 pizza = 0;
 avis  = 0;
 lemon_price = 10;
 avis_price = 50; 
 bitcoin = 0;
 divEL = document.querySelector("button")
 rotasjon = 0;
 fart = 10;
 bitcoin_price = 250
 fps = 5;
 html_coin = "<div class='btc' id= 'con'> <img src='bitcoin.png' alt=''  id='bitcoinm' style='width:150px'  title=''></div>";
 pizza_price = 900;
tesla_price = 500
tesla = 0 
    localStorage.setItem("saved", version);
    localStorage.setItem("dollars",dollars);
    localStorage.setItem("avis_price",avis_price)
    localStorage.setItem("html_coin",html_coin);
    localStorage.setItem("bitcoin",bitcoin);
    localStorage.setItem("lemo",lemo);
    localStorage.setItem("bitcoin_price",bitcoin_price);
    localStorage.setItem("lemon_price",lemon_price);
    localStorage.setItem("pizza",pizza);
    localStorage.setItem("pizza_price",pizza_price);
    localStorage.setItem("tesla_price",tesla_price);
    localStorage.setItem("tesla",tesla);
  

}


function add_coin(){
    
    dollars += 1* bitcoin
}


function buy_bitcoin(){

    if(dollars >= bitcoin_price ){
        bitcoin += 100;
        dollars -= bitcoin_price;
        bitcoin_price *= 5,5;
        document.getElementById("cons").innerHTML += html_coin     
    }

}

function add_tesla(){
    dollars += 1* tesla
}

function buy_tesla(){
    if(dollars >= tesla_price){
        tesla += 500;
        dollars -= tesla_price;

    }
}











// leger till dollars til he1 taggen ver gang du klikker på dollar og lagere det i variablene dollars


function click_dollar(){
    dollars+= 1;


        function animer(){

        rotasjon += fart

        divEL.style.transform="rotate("+ rotasjon+"deg)";
            
       
            setTimeout(function() {
                requestAnimationFrame(animer);
           }, 100/fps);
        
        
            
            

        }
        
        
        animer();


}

 
function add_lemon() {
    
     
    dollars +=  1* lemo;


}



function buy_lemon(){
    if(dollars >= lemon_price ){
        lemo += 1;
        dollars -= lemon_price;
        lemon_price *= 1,1;
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
        avis_price *= 5.5;
        
    }
}


function buy_pizza(){
    if(dollars >= pizza_price){
        pizza += 5;
        dollars -= pizza_price;
        pizza_price *= 1,1
    }
}


  function add_pizza(){
      dollars += 10 * pizza
  }


setInterval(function(){
document.getElementById("emon_price").innerHTML  = Math.floor(lemon_price);
document.getElementById("bit_price").innerHTML = Math.floor(bitcoin_price);
document.getElementById("av_price").innerHTML = Math.floor(avis_price);
document.getElementById("piz").innerHTML = Math.floor(pizza_price);
document.getElementById("tes").innerHTML = Math.floor(tesla_price);

}, 10);