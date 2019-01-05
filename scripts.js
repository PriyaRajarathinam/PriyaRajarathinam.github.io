localStorage.setItem("entrytable", $("#monday").html());
var tabledata  = localStorage.getItem( "entrytable" );
$("#monday").html( tabledata );
var items=document.getElementsByClassName("fa fa-trash trash");
for( var i=0;i<items.length;i++){
  var row=items[i];
  row.onclick=function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}
function displayRow(identifier){
    
  var input=document.getElementById("input1").value;
  var table=document.getElementById(identifier);
  var row=table.insertRow(-1);
  var cell1=row.insertCell(0);
  cell1.innerHTML=input;
  var span = document.createElement("SPAN");
  span.className = "fa fa-trash trash";
  cell1.appendChild(span);
  var items=document.getElementsByClassName("fa fa-trash trash");
  for( var i=0;i<items.length;i++){
    var row=items[i];
    row.onclick=function(){
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function addEntry(){
    alert("working");
    var table=document.getElementById("entries");
    var row=table.insertRow(0);
    var cell1=row.insertCell(0);
    var date=new Date();
    var insert=date.toDateString();
    cell1.innerHTML=insert;

}
