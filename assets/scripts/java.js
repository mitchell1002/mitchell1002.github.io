function signin(){
    var userName="m";
    var password =123;

    var user=document.getElementById("Email").value;
    var pass=document.getElementById("Password").value;
    
    if(user==userName && pass==password){
        window.location.replace("file:///C:/Users/mitch/OneDrive/Desktop/activity%201/SBA/shop.html")
    }
}

var clicks=1

function increase(){
    clicks+=1;
    document.getElementById("Total").innerHTML=clicks;
}
function decrease(){
    clicks -=1;
    document.getElementById("Total").innerHTML=clicks;
}
function incr(){
    clicks +=1;
    document.getElementById("Totl").innerHTML=clicks;
}
function decr(){
    clicks -=1;
    document.getElementById("Totl").innerHTML=clicks;
}

