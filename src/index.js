import printMe from './js/print';
import './js/test';
import './js/index.ts';
import './style.scss';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'Hello webpack & Lorem ipsum dolor sit amet.';
  btn.innerHTML = 'Click me and check the console!!!';

  btn.addEventListener('click', printMe);

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
