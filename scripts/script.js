
const input = document.getElementById("box");

function showMessage(){
  window.alert('The ture is Female!');
}

function showBtn(){
 var btn = document.getElementsByClassName('click_me')[0];
 btn.style.transition='0.8s';
 btn.style.opacity=1;
 console.log("djk");
}

function hideBtn(){
  var btn = document.getElementsByClassName('click_me')[0];
  btn.style.transition='0.5s';
  btn.style.opacity=0;
}

function addItem(){
  var section = document.getElementsByClassName('section')[0];
  var newTask = document.createElement("div");
  var backcard = document.createElement("div");
  var uncheck = document.createElement("img");
  uncheck.src = "/icons/unchecked.svg";
  var trash = document.createElement("img");
  trash.src = "/icons/trash.svg";
  var taskName = input.value;
  newTask.className = "card";
  newTask.innerText = taskName + "\n\n - july 7";
  backcard.className = "backcard";
  backcard.appendChild(uncheck);
  backcard.appendChild(trash);
  newTask.appendChild(backcard);
  section.appendChild(newTask);
  //backcard.style.display = 'none';
}

function removeItem(){
}

function showOptions(x){
  x.style.transition='0.8s';
  x.style.opacity=1;
}

function checked(){

}
