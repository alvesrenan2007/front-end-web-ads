document.querySelectorAll(".card").forEach((card) => {
  if(localStorage.getItem(card.id)){
    card.classList.add("marcado");
  }
});

function marcar(id, nome){
  const card = document.getElementById(id);
  card.classList.toggle("marcado");

  if(card.classList.contains("marcado")){
    localStorage.setItem(id, nome);
  } else {
    localStorage.removeItem(id);
  }
}
