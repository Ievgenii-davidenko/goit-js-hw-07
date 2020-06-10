'use strict';

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', nameChange);

function nameChange(e) {
  output.textContent = e.target.value;
  if (output.textContent === '') {
    output.textContent = 'незнакомец';
  }
}

// output.textContent = output.textContent ? target.value : 'незнакомец'; // тернарний оператор