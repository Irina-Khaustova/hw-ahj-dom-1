import { createImage } from '../GamePlay';
import { createNumber } from '../GamePlay';
//import goblin from '../img/goblin.png';

test('проверка работы функции createNumber', () => {
  const received = Array(4).fill().map((e, i) => i + 1);
  const expected = createNumber(4);
  expect(received.includes(expected)).toEqual(true);
});

test('проверка работы функции createImage', () => {
  const received = document.querySelector('.element2');
  //received.innerHTML = `<img src="${goblin}">`;
  //const expected = createImage(2);
  expect(received.includes(2)).toEqual(true);
});