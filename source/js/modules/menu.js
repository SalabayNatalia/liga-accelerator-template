export const menu = function () {

  const menuBtn = document.querySelector('[data-burger]');
  const header = document.querySelector('[data-header]');
  const link = document.querySelectorAll('[data-menu-link]');
  const body = document.querySelector('body');

  const onPopupEscKeydown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      header.classList.remove('is-open');
      body.classList.remove('no-scroll');
    }
  };

  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (header.classList.contains('is-open')) {
      header.classList.remove('is-open');

      document.removeEventListener('keydown', onPopupEscKeydown);
      body.classList.remove('no-scroll');
    } else {
      header.classList.add('is-open');

      document.addEventListener('keydown', onPopupEscKeydown);
      body.classList.add('no-scroll');
    }
  });

  link.forEach((element) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (header.classList.contains('is-open')) {
        header.classList.remove('is-open');
        body.classList.remove('no-scroll');
      } else {
        header.classList.add('is-open');
        body.classList.add('no-scroll');
      }
    });
  });
};
