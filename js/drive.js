var wheel;
var rot = 0;
var rot_deg = 10;

window.addEventListener('wheel', function(e){
  wheel = e.deltaY
  console.log(wheel)
})

function positionCar() {
  var w = window.innerWidth
  var y = window.scrollY / document.documentElement.scrollHeight;
  var wy = w * y
  
  document.querySelector('#horz_car').style.left = wy + 'px'  
  document.documentElement.style.setProperty('--bg-pos-x', -wy*3.75 + 'px')
  
  if(wheel > 0) {
    rot = rot + rot_deg
  } else {
    rot = rot - rot_deg
  }  
  document.documentElement.style.setProperty('--tire-rot', 'rotate('+rot+'deg)')
}

window.addEventListener('scroll', positionCar)