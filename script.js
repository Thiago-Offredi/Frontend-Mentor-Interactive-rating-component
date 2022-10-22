const button = document.getElementById('botao');
const options = document.querySelectorAll('.options label input');
const paragraph = document.querySelector("#paragraph-notes");

const optionsList = [...options];
const result = [""];

optionsList.map(item => item.addEventListener("click", () => {
  result[0] = item.value;
}))

const pressButton = () => {
  const container = document.getElementById("container-1");
  const container2 = document.getElementById("container-2");

  if (result[0] === "") {
    alert("voce precisa selecionar uma nota");
  } else {
    container.style.display = "none"
    container2.style.display = "block"
    paragraph.style.color='green'
    paragraph.innerText = `Você selecionou a nota ${result[0]} de ${optionsList.length}`
  }
}

button.addEventListener('click', pressButton);