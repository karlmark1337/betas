document.querySelectorAll(".project").forEach(p=>{
  p.onclick = ()=> goTo(p.dataset.url);
});
