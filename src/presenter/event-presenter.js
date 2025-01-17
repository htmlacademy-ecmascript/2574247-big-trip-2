import EventItemView from '../view/event-item-view.js';
import EditingForm from '../view/event-edit-view.js';
import EventListView from '../view/events-list-view.js';
import { render, replace } from '../framework/render.js';

export default class EventPresenter {
  #eventsContainer = null;
  #model = null;
  #eventListView = null;
  #onKeyDownHandler = null;
  #onEventUpdate = null;
  #destinations = null;
  #offers = null;

  constructor({ eventsContainer, model, onEventUpdate }) {
    this.#eventsContainer = eventsContainer;
    this.#model = model;
    this.#eventListView = new EventListView();
    this.#onEventUpdate = onEventUpdate;
    this.#destinations = model.destinations;
    this.#offers = model.offers;
  }

  init() {
    this.#renderTripEvents(this.#model.events);
  }

  #renderTripEvents(events) {
    render(this.#eventListView, this.#eventsContainer);
    events.forEach((event) => this.#renderTripEvent(event));
  }

  #renderTripEvent(event) {
    const tripEventView = new EventItemView({
      event,
      destinations: this.#destinations,
      offers: this.#offers,
      onClick: () => this.#switchToEditMode(tripEventView, event),
      onFavoriteClick: () => this.#handleFavoriteClick(event, tripEventView)
    });
    render(tripEventView, this.#eventListView.element);
  }

  #switchToEditMode(tripEventView, event) {
    const eventEditView = new EditingForm({
      event,
      events: this.#model.events,
      destinations: this.#destinations,
      offers: this.#offers,
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

  #handleFavoriteClick(event, tripEventView) {
    const updatedEvent = { ...event, isFavorite: !event.isFavorite };
    this.#onEventUpdate(updatedEvent);
    this.#rerenderEvent(updatedEvent, tripEventView);
  }

  #rerenderEvent(updatedEvent, tripEventView) {
    const newTripEventView = new EventItemView({
      event: updatedEvent,
      destinations: this.#destinations,
      offers: this.#offers,
      onClick: () => this.#switchToEditMode(newTripEventView, updatedEvent),
      onFavoriteClick: () => this.#handleFavoriteClick(updatedEvent, newTripEventView)
    });

    replace(newTripEventView, tripEventView);
  }
}
