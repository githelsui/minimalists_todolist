
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
  var taskName = input.value;
  newTask.className = "card";
  newTask.innerText = taskName;
  section.appendChild(newTask);
  console.log("works");
}

function removeItem(){

}
