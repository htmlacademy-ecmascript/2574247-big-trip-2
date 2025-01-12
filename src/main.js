import BoardPresenter from './presenter/board-presenter';
import PointsModel from './model/model';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const model = new PointsModel();
model.init();
const boardPresenter = new BoardPresenter({filtersContainer, eventsContainer, model});

boardPresenter.init();

