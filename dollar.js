var dollars = 0;

var intervaldId = window.setInterval(function(){
    // all kode her kjøres 10 ganger i sekundet
    document.getElementById("dollar_earnd").innerHTML=dollars;
    
}, 100);

function click_dollar(){
dollars++;
console.log(dollars);
}
 
function click_lemon(){
    
    dollars+=20;
    console.log(dollars);
}
function click_news(){
    dollars+=50;
    console.log(dollars);
}



