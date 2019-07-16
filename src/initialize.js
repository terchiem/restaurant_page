import createAbout from './about';

const initialize = () => {
  function createNav() {
    const nav = document.createElement('nav');
    nav.innerHTML = `<input type="radio" id="tab1" name="tab" checked>
    <label for="tab1" class="tab-button" data-index="0">About</label>

    <input type="radio" id="tab2" name="tab">
    <label for="tab2" class="tab-button" data-index="1">Menu</label>

    <input type="radio" id="tab3" name="tab">
    <label for="tab3" class="tab-button" data-index="2">Contact</label>`
    return nav;
  }

  const header = document.createElement('header');
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const content = document.createElement('div');

  div.innerHTML = `<span class="accent">T</span>erry's <span class="accent">T</span>acos`;
  div.classList.add('logo');
  h1.innerHTML = `Home of the <span class="accent">Nacho</span> Taco`;
  p.innerHTML = `The best tacos for the occasion`;
  content.innerHTML = createAbout();

  header.classList.add('clearfix');
  content.classList.add('content');
  header.appendChild(div);
  header.appendChild(h1);
  header.appendChild(p);
  document.body.appendChild(header);
  document.body.appendChild(createNav());
  document.body.appendChild(content);
};

export default initialize;