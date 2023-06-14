var a = document.querySelectorAll(".drum").length;

// sound by click
for (var i = 0; i < a; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    main(buttonInnerHTML);
    animation(buttonInnerHTML);
  });
}

// sound by keyboard

document.addEventListener("keydown", function (event) {
  main(event.key);
  animation(event.key);
});

// working
function main(key1) {
  switch (key1) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function animation(currentkey) {
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");

  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 100);
}
