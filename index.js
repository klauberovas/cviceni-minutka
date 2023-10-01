const alarmElm = document.querySelector('.alarm');
const alarmAudio = document.querySelector('audio');

const alarmRing = () => {
  return alarmElm.classList.add('alarm--ring'), alarmAudio.play();
};

const timerId = setTimeout(
  alarmRing,
  prompt('Zadej za kolik sekund má začít budík zvonit.') + '000',
);

const buttonElm = document.querySelector('.button');
buttonElm.addEventListener('click', () => {
  clearTimeout(timerId), (alarmElm.innerHTML = '<h2>Budík zastaven.</h2>');
});
