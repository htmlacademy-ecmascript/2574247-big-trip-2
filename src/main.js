import BoardPresenter from './presenter/board-presenter.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const sortsContainer = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({filtersContainer, sortsContainer});

boardPresenter.init();
