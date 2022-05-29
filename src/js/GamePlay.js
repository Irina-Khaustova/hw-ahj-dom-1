import goblin from '../img/goblin.png';

let activeElem = null;
export function createGamePlay(n) {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);
  for (let i = 0; i < n * n; i += 1) {
    const elem = document.createElement('div');
    elem.classList.add('element', `element${i}`);
    container.append(elem);
  }
}

export function createNumber(number) {
  return Math.floor(Math.random() * ((number * number) - 1));
}

export function createImage(n) {
  if (activeElem) {
    activeElem.innerHTML = '';
  }
  const image = new Image();
  image.src = goblin;
  const index = createNumber(n);
  activeElem = document.querySelector(`.element${index}`);
  activeElem.append(image);
}

export function beginPlay() {
  setTimeout(() => {
    createImage(4);
    beginPlay();
  }, 2000);
}
createGamePlay(4);
beginPlay();
