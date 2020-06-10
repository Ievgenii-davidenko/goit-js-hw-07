'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const controller = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

controller.addEventListener('input', changeSize);

function changeSize(e) {
  text.setAttribute('style', `font-size:${e.target.value}px`);
}