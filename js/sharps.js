
window.onLoad = function() {        
  window.scrollTo(0,1);
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

var logo = document.getElementById('sharps-logo');
var height = window.innerHeight;  

function scrollyMagic() {
  const scrollTop = window.scrollY;   
  const fromTop = height - (scrollTop*2);  
  const percent = 100*fromTop/height; 

  if (fromTop <= 0) 
    logo.style.width = "0%";
  else
    logo.style.width = percent + "%";   
}

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

window.addEventListener('scroll', throttle(scrollyMagic, 40));

// window.scroll();
window.scrollTo(0,1);
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  height = window.innerHeight;  
});