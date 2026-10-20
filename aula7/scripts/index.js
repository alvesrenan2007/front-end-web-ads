function executar(event){
  event.preventDefault(); // prevents the button from submitting the form
  
  const name = document.querySelector("#nome").value;
  alert(name);

}
