// selector for all elements in the pad and button class

let pads = document.querySelectorAll(".Pad");
let buttons = document.querySelectorAll(".Button");
// Array of kick sounds

let kicks = {
  kick1: new Audio("samples/kick_drum/1997 - Kick 1.wav"),
  kick2: new Audio("samples/kick_drum/1997 - Kick 2.wav"),
  kick3: new Audio("samples/kick_drum/1997 - Kick 3.wav"),
  kick4: new Audio("samples/kick_drum/1997 - Kick 4.wav"),
  kick5: new Audio("samples/kick_drum/1997 - Kick 5.wav"),
  kick6: new Audio("samples/kick_drum/1997 - Kick 6.wav"),
};

//  for loop to loop thru the kicks array and prevents the sounds to preload
for (let kick in kicks) {
  kicks[kick].preload = "none";
}

// for loop to loop thru pads and add event listeners to them individually
for (let i = 0; i < pads.length; i++) {
  pads[i].addEventListener("click", function () {
    let kick = kicks["kick" + (i + 1)];
    kick.currentTime = 0;
    kick.play();
  });
}

const keyCodes = ["j", "i", "k", "o", "p", "l", "J", "I", "K", "O", "P", "L"];

document.addEventListener("keydown", function (event) {
  let key = event.key;
  let index = keyCodes.indexOf(key);

  if (index >= 0) {
    let kick = kicks["kick" + ((index % 6) + 1)];
    kick.currentTime = 0;
    kick.play();
  }
});
