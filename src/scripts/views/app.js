/* eslint-disable no-trailing-spaces */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, content, navLink,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navLink = navLink;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      navLink: this._navLink,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');    
    skipLinkElem.addEventListener('click', (event) => {      
      event.preventDefault();
      document.querySelector('#content').focus();
    });
  }
}

export default App;
