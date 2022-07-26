import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// const burger = document.querySelector('.page-header__burger');
// const menu = document.querySelector('.main-nav__list');
// const menuLinks = document.querySelectorAll('.main-nav__link');
// const logo = document.querySelector('.page-header__logo');
// const wrapperMenu = document.querySelector('.page-header__wrapper');
// const popup = document.querySelector('.page-header__popup');

const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
const menuLinks = document.querySelectorAll('[data-menu-link]');
const logo = document.querySelector('[data-logo]');
const wrapperMenu = document.querySelector('[data-wrapper]');
const popup = document.querySelector('[data-popup]');

burger.addEventListener('click', function (evt) {
  evt.preventDefault();
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-open');
  for (const link of menuLinks) {
    link.classList.toggle('is-mobile-menu');
  }
  logo.classList.toggle('is-logo-open-menu');
  wrapperMenu.classList.toggle('is-mobile-open');
  popup.classList.toggle('is-popup-open');
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// const form = document.querySelector['data-form'];
// const inputs = document.querySelectorAll['data-input'];
// const email = document.querySelector['data-email'];
// const phone = document.querySelector['data-phone'];
// const checkbox = document.querySelector['data-checkbox'];

// form.onsubmit = function () {
//   const emailVal = email.value;
//   const phoneVal = phone.value;

//   inputs.forEach(function (input) {
//     if (input.value === '') {
//       input.classList.add('is-error');
//     } else {
//       input.classList.remove('is-error');
//     }
//   });

//   return false;
// };
