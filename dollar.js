var dollars = 0;
var lemo = 0;
var shop = 10;

var intervaldId = window.setInterval(function(){
    // all kode her kjøres 10 ganger i sekundet
    document.getElementById("dollar_earnd").innerHTML=dollars;
    add_lemon();
}, 1000);




function add_lemon() {
    dollars +=  10 * lemo;
}





function click_dollar(){
dollars++;

}
 


function click_lemon(){
    
    lemo+= 1;
    console.log(dollars);
}
function click_news(){
    dollars+=50;
    console.log(dollars);
}



