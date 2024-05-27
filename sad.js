const track = document.getElementById("image-track");

var x = 0; 


window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
}

window.onmousemove = e => {
  if (track.dataset.mouseDownAt !== "0") {
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    const y = parseFloat(percentage + x); 

    if (y > 0) {
        y = 0;
    } else if (y < -100) {
        y = -100;
    }
    x  = y; 

    track.style.transform = `translate(${y}%, 0%)`;
  }
}
