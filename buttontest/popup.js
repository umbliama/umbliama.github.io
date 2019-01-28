function PlaySound(soundobj1) {
  var thissound = document.getElementById(soundobj1);
  thissound.play();
}

function StopSound(soundobj1) {
  var thissound = document.getElementById(soundobj1);
  thissound.pause();
  thissound.currentTime = 0;
}
