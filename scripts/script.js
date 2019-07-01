// using Vanilla Javascript
const input = document.getElementById("box");

function showMessage(){
  window.alert('The ture is Female!');
}

function showBtn(){
 var btn = document.getElementsByClassName('click_me')[0];
 btn.style.transition='0.8s';
 btn.style.opacity=1;
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
  uncheck.src = "https://raw.githubusercontent.com/user/master/icons/unchecked.svg?example=foo&sanitize=true";
  var trash = document.createElement("img");
  trash.src = "/icons/trash.svg";
  var taskName = input.value;
  newTask.className = "card";
  newTask.innerText = taskName + "\n\n - " + currentDate();
  newTask.style.display = 'none';
  backcard.className = "backcard";
  backcard.appendChild(uncheck);
  backcard.appendChild(trash);
  newTask.appendChild(backcard);
  section.appendChild(newTask);
  fadeIn(newTask);
  input.value = '';
  newTask.addEventListener('click', function(){
    showOptions(backcard);
  });
}

function fadeIn(view){
  var steps = 0;
  view.style.display = 'block';
   var timer = setInterval(function() {
       steps++;
       view.style.opacity = 0.1 * steps;
       if(steps >= 20) {
           clearInterval(timer);
           timer = undefined;
       }
   }, 30);
}

function fadeOut(view){
  var steps = 0;
   var timer = setInterval(function() {
       steps++;
       if(view.style.opacity > 0)
          view.style.opacity = steps - 0.1;
       if(steps >= 20) {
           clearInterval(timer);
           timer = undefined;
       }
   }, 30);
   view.style.display = 'none';
   view.style.opacity = 0;
}

function removeItem(){
}

function showOptions(back){
  if(back.style.display == 'block'){
    fadeOut(back);

    console.log("options");
  }
  else{
    fadeIn(back);

    console.log("no options yet");
  }
}

function currentDate(){
  var today = new Date();
  return today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear();
}

function checked(){

}
