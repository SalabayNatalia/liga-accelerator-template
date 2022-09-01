export const anchor = function () {
  const smoothLinks = document.querySelectorAll('[data-menu-link]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};
