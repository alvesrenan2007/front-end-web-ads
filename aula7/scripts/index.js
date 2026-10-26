function executar(event){
  event.preventDefault(); // prevents the button from submitting the form
  clearForm();

  const name = document.querySelector("#nome").value;
  const errName = document.querySelector("#erro-nome");

  if(name === ""){
    errName.textContent = "Falta inserir um nome.";
    errName.classList.add("erro");
    errName.classList.remove("oculto");
  }

  const age = document.querySelector("#idade").value;
  const errAge = document.querySelector("#erro-idade");

  if(age === ""){
    errAge.textContent = "Falta inserir uma idade.";
    errAge.classList.add("erro");
    errAge.classList.remove("oculto");
  } else if(Number(age) < 18){
    errAge.textContent = "A idade mínima é 18 anos.";
    errAge.classList.add("erro");
    errAge.classList.remove("oculto");
  }

  // Challenge: use regex to validate the email field
  const email = document.querySelector("#email").value;
  const errEmail = document.querySelector("#erro-email");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(email === ""){
    errEmail.textContent = "Falta inserir um e-mail.";
    errEmail.classList.add("erro");
    errEmail.classList.remove("oculto");
  } else if(!emailRegex.test(email)){
    errEmail.textContent = "O e-mail fornecido não é válido.";
    errEmail.classList.add("erro");
    errEmail.classList.remove("oculto");
  }

  const terms = document.querySelector("#termos");
  const errTerms = document.querySelector("#erro-termos");
  if(terms.checked === false){
    errTerms.textContent = "É preciso aceitar os termos";
    errTerms.classList.add("erro");
    errTerms.classList.remove("oculto");
  }

} // end of executar

function clearForm(){
  document.querySelectorAll(".erro").forEach( (element) => {
    element.classList.remove("erro");
    element.classList.add("oculto");
  });
}
