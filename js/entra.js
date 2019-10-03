
window.onLoad = function() {        
  window.scrollTo(0,1);
}


window.onscroll = function(){

  const scrollTop = window.scrollY;
  const height = window.innerHeight;   
  const fromTop = height - (scrollTop*2);  

  if (fromTop <= 0) 
    document.getElementById('entra-logo').style.width = "0%";
  else  {
    const percent = 100*fromTop/height;      
    document.getElementById('entra-logo').style.width = percent + "%";
  }  
           
};

window.scroll();


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});