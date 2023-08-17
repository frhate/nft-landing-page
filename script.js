document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var cursor = document.getElementById("cursor");
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
  