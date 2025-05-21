const stars = document.querySelector('.stars-block');

function generateStars() {
  for(let i = 0; i < 30; i++) {
    stars.insertAdjacentHTML('beforeend', `
      <div class="stars-block__star"></div>
    `)
  }
  addColor();
}

function addColor() {
  const star = document.querySelectorAll('.stars-block__star');

  for(let row = 1; row < 6; row++) {
    const startIndex = row * 5;
    const yellowCount = Math.max(0, row);

    for(let i = 0; i < yellowCount; i++) {
      star[startIndex + i].classList.add('stars-block__star--colored');
    }
  }
}

generateStars();

const catalog__main = document.querySelector('.catalog__main');
import yellowStar from './image/star-yellow.svg';
import greyStar from './image/star-grey.svg';
import macImage from './image/mac.png';

function generateProductCards() {
  for(let i = 0; i < 8; i++) {
    catalog__main.insertAdjacentHTML('beforeend', `
      <div class="catalog__card">
        <div class="catalog__card--wrapper">
            <img class="card__img" src="${macImage}" alt="macImg">
            <div class="card__text--wrapper">
              <h1 class="card__headline">
                APPLE A1419 iMac 27" Retina 5K Monoblock (MNED2UA/A)
              </h1>
              <p class="card__paragraph">
                Product code: 195434
              </p>
            </div>
            <div class="card__review--wrapper">
              <div class="card__stars">
                <img class="card__star" src="${yellowStar}" alt="star">
                <img class="card__star" src="${yellowStar}" alt="star">
                <img class="card__star" src="${yellowStar}" alt="star">
                <img class="card__star" src="${yellowStar}" alt="star">
                <img class="card__star" src="${greyStar}" alt="star">
              </div>
              <p class="card__paragraph review">Reviews: 5</p>
            </div>
            <div class="card__price--wrapper">
              <p class="card__paragraph price">Price:</p>
              <h2 class="card__price-num">$2,199</h2>
            </div>
            <button class="card__button" type="button">
              Buy
            </button>
        </div>
      </div>
    `)
  }
}

generateProductCards();