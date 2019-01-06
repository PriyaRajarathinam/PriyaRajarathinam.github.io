
///Entries.html



//localStorage.removeItem("entrydata");

//Updates the User's current Entry
function updateTable(){
  var rows=document.getElementById("monday").rows;
  
  var data=[];
  if(!localStorage.getItem("entrydata")){
    for(var i=1;i<rows.length;i++){
      data.push(rows[i].cells[0].innerHTML);
    }
    console.log("Create");
    localStorage.setItem("entrydata",JSON.stringify(data));
  }
  var update=JSON.parse(localStorage.getItem("entrydata"));
  var table=document.getElementById("monday");

  for(var i=4;i<update.length;i++){
    
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    cell1.innerHTML=update[i];
  }
  var items=document.getElementsByClassName("fa fa-trash trash");
  for( var i=0;i<items.length;i++){
    var row=items[i];
    row.onclick=function(){
      var div = this.parentElement;
    var html=div.innerHTML;
    div.style.display="none";
      var temp=JSON.parse(localStorage.getItem("entrydata"));
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
}


var items=document.getElementsByClassName("fa fa-trash trash");
for(var i=0;i<items.length;i++){
  var row=items[i];
  row.onclick=function(){
    var div = this.parentElement;
    var html=div.innerHTML;
    div.style.display="none";
  }
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
  var html=cell1.innerHTML;
  var items=document.getElementsByClassName("fa fa-trash trash");
  for( var i=0;i<items.length;i++){
    var row=items[i];
    row.onclick=function(){
      console.log("delete");
      var div = this.parentElement;
    var html=div.innerHTML;
    div.style.display="none";
      var temp=JSON.parse(localStorage.getItem("entrydata"));
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

//localStorage.removeItem("entrylist");
function addEntry(){
  
  if(!localStorage.getItem("entrylist")){
    var arr=[];
    var date=new Date();
    var insert=date.toDateString();
    arr.push(insert);
    console.log("inserted one");
    localStorage.setItem("entrylist",JSON.stringify(arr));
  }else{
    var arr=JSON.parse(localStorage.getItem("entrylist"));
    var date=new Date();
    var insert=date.toDateString();
    if(arr[arr.length-1]===insert){
     console.log(arr[arr.length-1]);
      alert("You've already submitted today");
      return;
    }else{
      arr.push(insert);
      localStorage.setItem("entrylist",JSON.stringify(arr));
    }
    
  }

}


function updateEntryTable(){
  console.log(localStorage.getItem("entrylist"));
  var update=JSON.parse(localStorage.getItem("entrylist"));
  console.log(update.length);
  var table=document.getElementById("entries");
  for(var i=0;i<update.length;i++){
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    cell1.innerHTML=update[i]; 
  }
}



