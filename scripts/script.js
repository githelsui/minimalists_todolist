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
  btn.style.transition='0.8s';
  btn.style.opacity=0;
  console.log("djk");
}
