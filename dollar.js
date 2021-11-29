var dollars = 0;
var lemo = 0;
var pizza = 0;
var avis  = 0;
var lemon_price = 10;
var avis_price = 10; 
var bitcoin = 0;
var divEL = document.querySelector("button")
var rotasjon = 0;
var fart = 10;
var bitcoin_price = 250
var fps = 5;
var html_coin = "<div class='btc' id= 'con'> <img src='bitcoin.png' alt=''  id='bitcoinm' style='width:150px'  title=''></div>";
var version = 9


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






window.onload = function load() {
    if(parseInt(localStorage.getItem("saved")) === version){
    if(localStorage.getItem("saved") !== null){
     
     if(localStorage["saved"] !== undefined){
     
         if(typeof(localStorage.getItem("saved")) === "string"){
         dollars = parseInt(localStorage.getItem("click_dollars"));
        lemo = parseInt(localStorage.getItem("buy_lemon"));
        avis = parseInt(localStorage.getItem("buy_avis"));
         bitcoin = parseInt(localStorage.getItem("buy_bitcoin"));
         html_coin = parseInt(localStorage.getItem("html_coin"));
        console.log("Loaded!");
 }
  }
  }
  }
  }

  var ba = setInterval(save,10000);
  function save() {
      localStorage.setItem("saved", version);
      localStorage.setItem("click_dollars", dollars);
      localStorage.setItem("buy_bitcoin", bitcoin);
      localStorage.setItem("buy_avis", avis);
      localStorage.setItem("html_coin",html_coin);
   ;
  
      console.log("Saved");
  
  }


  function reset() {
     dollars = 0;
     lemo = 0;
     pizza = 0;
     avis  = 0;
     lemon_price = 10;
     avis_price = 10; 
     bitcoin = 0;
     divEL = document.querySelector("button")
     rotasjon = 0;
     fart = 10;
     bitcoin_price = 250
     fps = 5;
     html_coin = "<div class='btc' id= 'con'> <img src='bitcoin.png' alt=''  id='bitcoinm' style='width:150px'  title=''></div>";
     version = 1
    
    localStorage.setItem("saved", version);
    localStorage.setItem("saved", version);
    localStorage.setItem("click_dollars", dollars);
    localStorage.setItem("buy_bitcoin", bitcoin);
    localStorage.setItem("buy_avis", avis);
    localStorage.setItem("html_coin",html_coin);
    window.location.reload();
}
// leher till dollars til he taggen ver gang du klikker på dollar

function add_coin(){
    
    dollars += 1* bitcoin
}




function buy_bitcoin(){

    if(dollars >= bitcoin_price ){
        bitcoin += 100;
        dollars -= bitcoin_price;
        bitcoin_price *= 5,5;
        
     
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
            
       
            setTimeout(function() {
                requestAnimationFrame(animer);
           }, 100/fps);
        
        
            
            

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


 
setInterval(function (){+
document.getElementById("emon_price").innerHTML = math.floor(lemon_price);
document.getElementById("bitcoin_price").innerHTML = Math.floor(bitcoin_price);
document.getElementById("")

    
}, 10);
