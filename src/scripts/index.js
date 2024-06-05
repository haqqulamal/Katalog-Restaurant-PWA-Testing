/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const skipToContent = document.querySelector('.skip-to-content');
skipToContent.addEventListener('click', () => {
  document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
  skipToContent.blur();
});

const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.querySelectorAll('a, button, input').forEach((e) => {
  if (e.offsetWidth < 44 || e.offsetHeight < 44) {
    console.log(e);
  }
});
