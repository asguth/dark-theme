function updateIcon() {
    const iconToggle = document.querySelector('#icon-toggle');
    if (document.querySelector('html').dataset.theme === 'dark') {
      iconToggle.classList.remove('bi-sun');
      iconToggle.classList.add('bi-moon');
    } else {
      iconToggle.classList.remove('bi-moon');
      iconToggle.classList.add('bi-sun');
    }
}

const cardTitle = document.querySelector('#word-toggle');
const lightModeTitle = 'This is Light Theme!';
const darkModeTitle = 'This is Dark Theme!';

function updateTitle() {
  if (document.querySelector('html').dataset.theme === 'dark') {
    cardTitle.textContent = darkModeTitle;
  } else {
    cardTitle.textContent = lightModeTitle;
  }
}

const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  const htmlElement = document.querySelector('html');
  htmlElement.dataset.theme = htmlElement.dataset.theme === 'dark' ? 'light' : 'dark';
  
  updateTitle();
  updateIcon();
});

updateTitle();
updateIcon();