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