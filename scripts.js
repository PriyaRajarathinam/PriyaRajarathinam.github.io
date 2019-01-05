
///Entries.html
if(!localStorage.getItem("entrylist")){
  var temp=[];
  localStorage.setItem("entrieslist",JSON.stringify(temp));
}
function updateEntryTable(){
  var update=JSON.parse(localStorage.getItem("entrylist"));
  var table=document.getElementById("entries");
  
}



function updateTable(){
  var update=JSON.parse(localStorage.getItem("entrydata"));
  var table=document.getElementById("monday");
  for(var i=4;i<update.length;i++){
    
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    cell1.innerHTML=update[i];
  }
}

var rows=document.getElementById("monday").rows;
var items=document.getElementsByClassName("fa fa-trash trash");
for( var i=0;i<items.length;i++){
  var row=items[i];
  row.onclick=function(){
    var div = this.parentElement;
    var html=div.innerHTML;
    div.style.display="none";
  }
}


//localStorage.removeItem("entrydata");
var data=[];
if(!localStorage.getItem("entrydata")){
  for(var i=1;i<rows.length;i++){
    data.push(rows[i].cells[0].innerHTML);
  }
  console.log("Create");
  localStorage.setItem("entrydata",JSON.stringify(data));
}

function displayRow(identifier){
  var rows=document.getElementById("monday").rows;
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
      console.log("delete");
      var temp=JSON.parse(localStorage.getItem("entrydata"));
      var div = this.parentElement;
      var html=div.innerHTML;
      div.style.display="none";
      console.log(html);
     for(var j=0;j<temp.length;j++){
        if(temp[j]===html){
          console.log("removing");
          temp.splice(j,1);
          localStorage.setItem("entrydata",JSON.stringify(temp));
        }
      }
    }
  }
  if(localStorage.getItem("entrydata")){
    var temp=JSON.parse(localStorage.getItem("entrydata"));
    temp.push(cell1.innerHTML);
    localStorage.setItem("entrydata",JSON.stringify(temp));
    console.log(JSON.stringify(temp));
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
    var span = document.createElement("SPAN");
    span.className = "fa fa-trash trash";
    cell1.appendChild(span);

}



