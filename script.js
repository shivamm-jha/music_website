// taking the mysong and icon element


let mysong=document.getElementById('mysong');
let icon=document.getElementById('icon');

// function to play songs

icon.onclick = function(){
   

    if(mysong.paused){
        mysong.play();
        icon.src="media/pause.png";
    }
    else{
        mysong.pause();
        icon.src="media/play.png";
    }
}

// function to display the nav bar items when clicked on the hamburger menu

const toggleButton=document.getElementsByClassName('toggle-button')[0];
        const navbarLinks=document.getElementsByClassName('navbar-links')[0];
        
    
        toggleButton.addEventListener('click',()=>{
            navbarLinks.classList.toggle('active')

        })


// --------function to hide the content of body when clicked on the hamburger menu---------

function toggleText(){
  var x = document.getElementById("content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
