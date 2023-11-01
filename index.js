

document.querySelector("form").addEventListener("submit",myfun);
function myfun(event){
    event.preventDefault();
let x=document.querySelector("#task").value;
let y=document.querySelector("#priority").value;

displaytable (x , y)
}
  function displaytable(x,y){
let a=document.createElement("tr");
let b=document.createElement("td");
b.innerText=x;
let c=document.createElement("td");
c.innerText=y;
let d=document.createElement("td");


d.innerText=" as my fav"
a.append(b,c,d);
document.querySelector("tbody").append(a);
}