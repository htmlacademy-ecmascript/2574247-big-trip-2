import EventItemView from '../view/event-item-view.js';
import EditingForm from '../view/event-edit-view.js';
import EventListView from '../view/events-list-view.js';
import { render, replace } from '../framework/render.js';

export default class EventPresenter {
  #eventsContainer = null;
  #model = null;
  #eventListView = null;
  #onKeyDownHandler = null;

  constructor({ eventsContainer, model }) {
    this.#eventsContainer = eventsContainer;
    this.#model = model;
    this.#eventListView = new EventListView();
  }

  init() {
    this.#renderTripEvents(this.#model.events);
  }

  #renderTripEvents(events) {
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
    render(tripEventView, this.#eventListView.element);
  }

  #switchToEditMode(tripEventView, event, events) {
    const eventEditView = new EditingForm({
      events,
      event,
      destinations: this.#model.destinations,
      offers: this.#model.offers,
      onSubmit: () => this.#switchToViewMode(tripEventView, eventEditView),
      onClick: () => this.#switchToViewMode(tripEventView, eventEditView)
    });

    if (tripEventView.element.parentElement) {
      replace(eventEditView, tripEventView);
    }

    this.#onKeyDownHandler = (evt) => this.#onDocumentKeyDown(evt, tripEventView, eventEditView);
    document.addEventListener('keydown', this.#onKeyDownHandler);
  }

  #switchToViewMode(tripEventView, eventEditView) {
    if (eventEditView.element.parentElement) {
      replace(tripEventView, eventEditView);
    }

    document.removeEventListener('keydown', this.#onKeyDownHandler);
  }

  #onDocumentKeyDown(evt, tripEventView, eventEditView) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#switchToViewMode(tripEventView, eventEditView);
    }
  }
}
