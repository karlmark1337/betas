const overlay = document.getElementById("page-transition");

function goTo(url){
  overlay.classList.add("active");
  playTransitionSound();

  setTimeout(()=>{
    window.location.href = url;
  },1600);
}