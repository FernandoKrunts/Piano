const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

console.log(volumeSlider);
let allKeys = [],
  audio = new Audio("tunes/a.wav"); // por padrao , audio src "a"
const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passando audio baseado na chave recebida
  audio.play(); //tocar audio

  const clickedKey = document.querySelector(`[data-key="${key}"]`);

  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  //chamar a função playTune e passar o valor data kay como argumento
  key.addEventListener("click", () => playTune(key.dataset.key));
});
const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

document.addEventListener("keydown", pressedKey);

keysCheckbox.addEventListener("click", showHideKeys);
