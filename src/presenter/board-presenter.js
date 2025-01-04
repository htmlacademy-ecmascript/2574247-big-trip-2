import FiltersView from '../view/filters-view.js';
import SortView from '../view/sorts-view.js';
import EventItemView from '../view/event-item-view.js';
import EventEditVieW from '../view/event-edit-view.js';
import EventListView from '../view/events-list-view.js';
import { RenderPosition } from '../render.js';
import { render, replace } from '../framework/render.js';

export default class BoardPresenter {
  #filtersContainer = null;
  #eventsContainer = null;
  #model = null;
  #eventListView = null;

  constructor({ filtersContainer, eventsContainer, model }) {
    this.#filtersContainer = filtersContainer;
    this.#eventsContainer = eventsContainer;
    this.#model = model;
    this.#eventListView = new EventListView();
  }

  init() {
    render(new FiltersView(), this.#filtersContainer, RenderPosition.BEFOREEND);
    render(new SortView(), this.#eventsContainer);
    this.#renderTripEvents(this.#model);
  }

  #renderTripEvents({ events }) {
    render(this.#eventListView, this.#eventsContainer);
    events.forEach((event) => this.#renderTripEvent(event));
  }

  #renderTripEvent(event) {
    const { events, destinations, offers } = this.#model;

    const tripEventView = new EventItemView({
      event,
      destinations,
      offers,
      onClick: () => this.#switchToEditMode(tripEventView, event, events)
    });

    const eventEditView = new EventEditVieW({
      events,
      event,
      destinations,
      offers,
      onSubmit: () => this.#switchToViewMode(tripEventView, eventEditView),
      onClick: () => this.#switchToViewMode(tripEventView, eventEditView)
    });

    render(tripEventView, this.#eventListView.element);
  }

  #switchToEditMode(tripEventView, event, events) {
    const eventEditView = new EventEditVieW({
      events,
      event,
      destinations: this.#model.destinations,
      offers: this.#model.offers,
      onSubmit: () => this.#switchToViewMode(tripEventView, eventEditView),
      onClick: () => this.#switchToViewMode(tripEventView, eventEditView)
    });

    replace(eventEditView, tripEventView);
    document.addEventListener('keydown', (evt) => this.#onDocumentKeyDown(evt, tripEventView, eventEditView));
  }

  #switchToViewMode(tripEventView, eventEditView) {
    replace(tripEventView, eventEditView);
    document.removeEventListener('keydown', this.#onDocumentKeyDown);
  }

  #onDocumentKeyDown(evt, tripEventView, eventEditView) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#switchToViewMode(tripEventView, eventEditView);
    }
  }
}

