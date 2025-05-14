document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');

  menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
});

document.getElementById('toggleButton').addEventListener('click', function () {
  const menu = document.querySelector('.mb-menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});