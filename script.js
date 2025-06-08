document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.category-menu');
  const btn = nav.querySelector('.hamburger');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
