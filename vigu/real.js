function myMove() 
{
  var elem = document.querySelector("#playButton");  
  
  var pos = 0;
  
  var x = Math.floor((Math.random() * 10) + 1);
  console.log(x)
  
  var id = setInterval(frame, x);
  
  
  function frame() 
  {
    if (pos == 1274) 
        {
      clearInterval(id);
    } 
    else 
    {
      pos++; 
      elem.style.left = pos + 'px'; 

    }
      
    }
  }