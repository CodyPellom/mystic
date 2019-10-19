var menuIcon = document.getElementById("menuIcon");
var menuLinks = document.getElementById("linkSection");

var count = 0;
menuIcon.onclick =
function menuShow(){
count++;
for(i = 0; i < count; i++ ){
 if (count % 2){
    menuLinks.style.opacity = "1"; 
} else {
    menuLinks.style.opacity = "0";
}
}
}
