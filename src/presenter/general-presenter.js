import FiltersView from '../view/filters-view.js';
import SortView from '../view/sorts-view.js';
import NoEventItemView from '../view/no-events-item-view.js';
import { RenderPosition } from '../render.js';
import { render } from '../framework/render.js';
import EventPresenter from './event-presenter.js';

export default class GeneralPresenter {
  #filtersContainer = null;
  #eventsContainer = null;
  #model = null;
  #eventPresenter = null;

  constructor({ filtersContainer, eventsContainer, model }) {
    this.#filtersContainer = filtersContainer;
    this.#eventsContainer = eventsContainer;
    this.#model = model;
    this.#eventPresenter = new EventPresenter({ eventsContainer: this.#eventsContainer, model });
  }

  init() {
    render(new FiltersView(), this.#filtersContainer, RenderPosition.BEFOREEND);
    if (this.#model.events.length === 0) {
      render(new NoEventItemView(), this.#eventsContainer);
    } else {
      render(new SortView(), this.#eventsContainer);
      this.#eventPresenter.init();
    }
  }

  #renderTripEvents() {
    // Метод для рендеринга событий будет вызываться из event-presenter.js
  }
}
