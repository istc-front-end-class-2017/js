let circle = document.getElementsByClassName('circle')[0];
let left = 10;
let speed = 1;

setInterval(()=>{
  circle.setAttribute('style', `left: ${left}px;`);
  if (left >= 100 || left <= 9){
    speed *= -1;
  }
  left += speed;
},20);