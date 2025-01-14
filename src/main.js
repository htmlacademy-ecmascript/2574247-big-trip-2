import GeneralPresenter from './presenter/general-presenter';
import PointModel from './model/model';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const model = new PointModel();
model.init();
const generalPresenter = new GeneralPresenter({filtersContainer, eventsContainer, model});

generalPresenter.init();

