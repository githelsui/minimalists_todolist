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
  uncheck.src = "/icons/unchecked.svg";
  var trash = document.createElement("img");
  trash.src = "/icons/trash.svg";
  var taskName = input.value;
  newTask.className = "card";
  newTask.innerText = taskName + "\n\n - " + currentDate();
  backcard.className = "backcard";
  backcard.appendChild(uncheck);
  backcard.appendChild(trash);
  newTask.appendChild(backcard);
  section.appendChild(newTask);
  input.value = '';
  newTask.addEventListener('click', function(){
    showOptions(backcard);
    console.log("something sn");
  });
}

function removeItem(){
}

function showOptions(back){
  if(back.style.display == 'block'){
    back.style.display = 'none';
    back.style.transition='0.8s';
    back.style.opacity=0;
  }
  else{
    back.style.display = 'block';
    back.style.transition='0.8s';
    back.style.opacity=1;
  }
}

function currentDate(){
  var today = new Date();
  return today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear();
}

function checked(){

}
