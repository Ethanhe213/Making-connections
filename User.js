var y=2;
var a=418;
function remove(){
    var x=document.getElementById("img3");
    x.remove();
    y--;
    var z=document.getElementById("num1");
    z.innerText=y
    
}
function remove1(){
    var x=document.getElementById("img4");
    x.remove();
    y--;
    var z=document.getElementById("num1");
    z.innerText=y
}
function add(){
    a++;
    var b=document.getElementById("num2");
    b.innerText=a;
}
function random_item(items)
{
return items[Math.floor(Math.random()*items.length)];
}
function change(){
    list=["Adrien D","Anne J","Alayne T","Arry Y"]
    var x=document.getElementById("text4");
    x.innerText=random_item(list)
}