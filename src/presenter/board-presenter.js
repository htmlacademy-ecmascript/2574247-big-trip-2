import FiltersView from '../view/filters-view.js';
import SortView from '../view/sorts-view.js';
import NoEventItemView from '../view/no-events-item-view.js';
import EventListView from '../view/events-list-view.js';
import { RenderPosition } from '../render.js';
import { render } from '../framework/render.js';
import EventPresenter from './event-presenter.js';

export default class BoardPresenter {
  #filtersContainer = null;
  #eventsContainer = null;
  #eventsListView = new EventListView();
  #model = null;
  #eventPresenters = new Map();
  #currentSortType = 'day';

  constructor({ filtersContainer, eventsContainer, model }) {
    this.#filtersContainer = filtersContainer;
    this.#eventsContainer = eventsContainer;
    this.#model = model;
  }

  init() {
    render(new FiltersView(), this.#filtersContainer, RenderPosition.BEFOREEND);

    if (this.#model.events.length === 0) {
      render(new NoEventItemView(), this.#eventsContainer);
      return;
    }

    const sortView = new SortView({
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(sortView, this.#eventsContainer);

    render(this.#eventsListView, this.#eventsContainer);

    this.#renderTripEvents();
  }

  #renderTripEvents() {
    this.#clearTripEvents();

    const sortedEvents = this.#getSortedEvents();
    sortedEvents.forEach((event) => {
      this.#renderEvent(event);
    });
  }

  #renderEvent(event) {
    const eventPresenter = new EventPresenter({
      eventsContainer: this.#eventsListView.element,
      model: this.#model,
      onEventUpdate: this.#handleEventUpdate,
      onEdit: this.#handleEditEvent,
    });
    eventPresenter.init(event);
    this.#eventPresenters.set(event.id, eventPresenter);
  }

  #clearTripEvents() {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
    this.#eventPresenters.clear();
    this.#eventsListView.element.innerHTML = '';
  }

  #getSortedEvents() {
    const events = [...this.#model.events];

    switch (this.#currentSortType) {
      case 'time':
        return events.sort(
          (a, b) =>
            (new Date(b.dateTo) - new Date(b.dateFrom)) -
            (new Date(a.dateTo) - new Date(a.dateFrom))
        );
      case 'price':
        return events.sort((a, b) => b.basePrice - a.basePrice);
      case 'day':
      default:
        return events.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
    }
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#renderTripEvents();
  };

  #handleEditEvent = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleEventUpdate = (updatedEvent) => {
    this.#model.updateEvent(updatedEvent);

    if (this.#eventPresenters.has(updatedEvent.id)) {
      const presenter = this.#eventPresenters.get(updatedEvent.id);
      presenter.init(updatedEvent);
    }
  };
}
