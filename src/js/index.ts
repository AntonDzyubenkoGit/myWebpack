function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack from index.ts';

  return element;
}

document.body.appendChild(component());

const num: Number = 5;

console.log(typeof num, num);
