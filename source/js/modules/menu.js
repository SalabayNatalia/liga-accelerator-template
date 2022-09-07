export const menu = function () {
  const menuBtn = document.querySelector('[data-burger]');
  const header = document.querySelector('[data-header]');
  const link = document.querySelectorAll('[data-menu-link]');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.page-header__popup .container');

  body.classList.remove('nojs');

  const onPopupEscKeydown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      header.classList.remove('is-open');
      body.classList.remove('no-scroll');
    }
  };

  const onPopupOpened = () => {
    header.classList.add('is-open');
    body.classList.add('no-scroll');
  };

  const onPopupClosed = () => {
    header.classList.remove('is-open');
    body.classList.remove('no-scroll');
  };

  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (header.classList.contains('is-open')) {
      onPopupClosed();
      document.removeEventListener('keydown', onPopupEscKeydown);
    } else {
      onPopupOpened();
      document.addEventListener('keydown', onPopupEscKeydown);
    }
  });

  link.forEach((element) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (header.classList.contains('is-open')) {
        onPopupClosed();
      }
    });
  });

  overlay.addEventListener('click', (evt) => {
    evt.preventDefault();
    let target = evt.target;
    if (target === overlay) {
      if (header.classList.contains('is-open')) {
        onPopupClosed();
      }
    }
  });
};
