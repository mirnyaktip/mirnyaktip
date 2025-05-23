const cursor = document.getElementById('cursor');
let cursorX = window.innerWidth/2, cursorY = window.innerHeight/2;
let drawX = cursorX, drawY = cursorY;

document.addEventListener('mousemove', (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
});

function animateCursor() {
  drawX += (cursorX - drawX) * 0.25;
  drawY += (cursorY - drawY) * 0.25;
  cursor.style.left = drawX + "px";
  cursor.style.top = drawY + "px";
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener('mousedown', ()=>{
  cursor.style.filter = 'drop-shadow(0 0 18px #ff50dc)';
  setTimeout(()=> cursor.style.filter = '', 160);
});