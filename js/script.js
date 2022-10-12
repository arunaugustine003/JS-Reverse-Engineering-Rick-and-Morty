//Optimized code by removing un-necessary calculations from EventListener
const eyes = document.querySelectorAll(".eye");
const anchor = document.getElementById("anchor");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;
//function to calculate deg of rotation
function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
document.addEventListener("mousemove", (e) => {
  // console.log(e);
  const mouseX = e.clientX; // gets X cordinate of Mouse
  const mouseY = e.clientY; // gets Y cordinate of Mouse
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  console.log(angleDeg);
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
  });
});
