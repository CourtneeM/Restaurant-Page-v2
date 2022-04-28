import header from './components/header';
import homepage from './components/homepage';
import menu from './components/menu';
import contact from './components/contact';

import './style/style.scss';

const contentContainer = document.querySelector('#content');

contentContainer.appendChild(header());
contentContainer.appendChild(homepage());

const headerListItems = [...document.querySelectorAll('header > ul > li')];

headerListItems.forEach(item => item.addEventListener('click', e => {
  contentContainer.removeChild(contentContainer.lastChild);

  switch (e.target.textContent) {
    case 'Home':
      contentContainer.appendChild(homepage());
      break;
    case 'Menu':
      contentContainer.appendChild(menu());
      break;
    case 'Contact':
      contentContainer.appendChild(contact());
  }
}));