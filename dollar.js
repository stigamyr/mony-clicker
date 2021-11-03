var dollars = 0;
var lemo = 0;
var pizza = 0;
var lemon_price = 10;

var intervaldId = window.setInterval(function(){
    // all kode her kjøres 10 ganger i sekundet
    document.getElementById("dollar_earnd").innerHTML=dollars;
    
}, 100);



var intervaldId = window.setInterval(function(){
    // all kode her kjøres 10 ganger i sekundet
    document.getElementById("dollar_earnd").innerHTML=dollars;
    add_lemon();
    add_pizza();
}, 1000);





function add_lemon() {
    
     
      dollars +=  10 * lemo;


}



function click_dollar(){
dollars++;

}
 


function buy_lemon(){
    if(dollars >= lemon_price ){
        lemo += 1;
        dollars -= lemon_price;
        lemon_price *= 3,3;
        console.log(dollars);
    }
    
}
function click_news(){
    dollars+=50;
    console.log(dollars);
}


function click_pizza(){
    pizza += 1
}

  function add_pizza(){
      dollars += 10 * pizza
  }





