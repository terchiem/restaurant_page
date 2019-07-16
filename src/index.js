import initialize from './initialize';
import createAbout from './about';
import createMenu from './menu';
import createContact from './contact';

initialize();

const tabModules = [createAbout, createMenu, createContact];
const content = document.querySelector('.content');
const tabs = document.querySelectorAll('.tab-button');
tabs.forEach((tab) => {
  tab.addEventListener('click', fillContent);
})

function fillContent(e) {
  content.innerHTML = tabModules[e.target.dataset.index]();
}
