import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImg } from './js/pixabay-api';
import { showGLR } from './js/render-functions';

export const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const waitMsg = document.querySelector('.wait-msg');
const loadBtn = document.querySelector('.load-btn');
const loadMsg = document.querySelector('.load-msg');

let searchName = '';
let page = null;
let total = 1;
let perPage = 40;

form.addEventListener('submit', async e => {
  e.preventDefault();

  document.querySelector('.gallery').innerHTML = '';

  searchName = input.value.trim();
  page = 1;

  if (!searchName) {
    iziToast.show({
      backgroundColor: 'rgba(239, 64, 64, 1)',
      messageColor: `rgba(255, 255, 255, 1)`,
      close: `true`,
      position: 'topRight',
      title: 'Error',
      titleColor: '#fff',
      titleSize: '16px',
      message: 'Input search string',
    });
    return;
  }
  waitMsg.innerHTML =
    '"Wait, the image is loaded" <span class="loader"></span>';

  try {
    const result = await getImg(searchName, page, perPage);

    showGLR(result.hits);

    total = result.total;

    if (result.hits.length == 0) {
      iziToast.show({
        backgroundColor: 'rgba(239, 64, 64, 1)',
        messageColor: `rgba(255, 255, 255, 1)`,
        close: `true`,
        position: 'topRight',
        title: 'Error',
        titleColor: '#fff',
        titleSize: '16px',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch {
    waitMsg.textContent = 'Ups ...';
  }

  waitMsg.textContent = '';

  checkBtnStatus();
  form.reset();
});

loadBtn.addEventListener('click', async () => {
  hideLoadBtn();
  loadMsg.innerHTML =
    '"Wait, the image is loaded" <span class="loader"></span>';
  page += 1;
  checkBtnStatus();

  const result = await getImg(searchName, page, perPage);
  showGLR(result.hits);
  loadMsg.textContent = '';
  scroll();
});

function checkBtnStatus() {
  const maxPage = Math.ceil(total / perPage);

  if (page >= maxPage) {
    hideLoadBtn();

    iziToast.show({
      backgroundColor: 'rgba(239, 64, 64, 1)',
      messageColor: `rgba(255, 255, 255, 1)`,
      close: `true`,
      position: 'topRight',

      titleColor: '#fff',
      titleSize: '16px',
      message: 'We are sorry, but you have reached the end of search results.',
    });
  } else {
    showLoadBtn();
  }
}

function showLoadBtn() {
  loadBtn.classList.remove('hidden');
}

function hideLoadBtn() {
  loadBtn.classList.add('hidden');
}

function scroll() {
  const info = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  const height = info.height;
  scrollBy({
    behavior: 'smooth',
    top: 2 * height,
  });
}
