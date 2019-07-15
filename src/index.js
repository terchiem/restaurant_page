console.log('Hello from src/index.js');

function test() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello from src/index.js';
  return element;
}

document.body.appendChild(test());
