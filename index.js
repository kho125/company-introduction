document.addEventListener('DOMContentLoaded', function () {
  const navCheck = document.getElementById('nav-check');
  const mbMenuWrap = document.querySelector('.mb-menu-wrap');

  if (!navCheck || !mbMenuWrap) return;

  navCheck.addEventListener('change', function () {
    document.body.style.overflow = navCheck.checked ? 'hidden' : '';
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navCheck.checked = false;
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('pageshow', function () {
    navCheck.checked = false;
    document.body.style.overflow = '';

    mbMenuWrap.style.display = 'none';
    mbMenuWrap.offsetHeight;
    mbMenuWrap.style.display = '';
  });
});
