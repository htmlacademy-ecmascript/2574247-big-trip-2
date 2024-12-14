import BoardPresenter from './presenter/board-presenter.js';
import Model from './model/model.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');

const model = new Model();
const boardPresenter = new BoardPresenter({filtersContainer, eventsContainer, model});

boardPresenter.init();

