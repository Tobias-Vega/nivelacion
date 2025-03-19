const inputEl = document.getElementById("input-text");
const btnEl = document.getElementById("btn");
const boxEl = document.getElementById("box");
const textEl = document.getElementById("text");

  let colorIndex = 0;

const getInputValue = () => {
  const inputValue = inputEl.value;
  if (!inputValue) {
    return alert("El campo no puede estar vacío");
  }
  textEl.innerText = inputValue;
  boxEl.style.display = "block";
  btnEl.style.display = "block";
}

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/colors');
    const data = await response.json();
    changeColor(data)
  } catch (error) {
    throw new Error('Error en la petición')
  }
}

const changeColor = (data) => {

  boxEl.style.backgroundColor = data[colorIndex].background;
  textEl.style.color = data[colorIndex].text;

  if (colorIndex === data.length - 1) {
    colorIndex = 0;
  } else {
    colorIndex++;
  }
}


inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getInputValue();
  }
});

btnEl.addEventListener("click", fetchData)