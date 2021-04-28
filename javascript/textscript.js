myitem = document.getElementById("firsttest");
thebutton = document.getElementById("thebutton");
buttontest = document.getElementById("buttontest");
buttontest2 = document.getElementById("buttontest2");
myinput = document.getElementById("myinput");
inputtest = document.getElementById("inputtest");

myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", onMouseOut);
thebutton.addEventListener("click", onButtonClick);
myinput.addEventListener("change", onChange);

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
