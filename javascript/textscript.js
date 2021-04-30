myitem = document.getElementById("firsttest");
thebutton = document.getElementById("thebutton");
buttontest = document.getElementById("buttontest");
buttontest2 = document.getElementById("buttontest2");
myinput = document.getElementById("myinput");
inputtest = document.getElementById("inputtest");
hands = document.getElementById("hands");
audio = document.getElementById('audio')

myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", onMouseOut);
thebutton.addEventListener("click", onButtonClick);
myinput.addEventListener("change", onChange);
hands.addEventListener("click", onImgClick)

function onClick() {
  myitem.style.color = "green";
}

function onMouseOut() {
  myitem.style.color = "";
}

function onButtonClick() {
  buttontest.style.color = "red";
  buttontest2.style.fontSize = "small";
  buttontest2.innerHTML = "私は小さいテクストです。ಠ╭╮ಠ";
}

function onChange() {
  newtext = myinput.value;
  inputtest.innerHTML = "そうですか。私も" + newtext + "が好きです。";
}

function onImgClick() {
  hands.style.width = "100%";
  hands.style.height = "200px";
  audio.play();
}
