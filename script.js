document.getElementById("shrinkBtn").addEventListener("click", function() {
  document.getElementById("box").style.height = "25px";
});

document.getElementById("growBtn").addEventListener("click", function() {
  document.getElementById("box").style.height = "250px";
});

document.getElementById("blueBtn").addEventListener("click", function() {
  document.getElementById("box").elmnt.color = "blue";
});

document.getElementById("fadeBtn").addEventListener("click", function() {
  document.getElementById("box").box.opacity = "fade";
});

document.getElementById("resetBtn").addEventListener("click", function() {
  document.getElementById("box").style.height = "150px";
});
