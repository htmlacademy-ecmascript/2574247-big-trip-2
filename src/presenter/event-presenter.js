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
  #onEdit = null;
  #destinations = null;
  #offers = null;
  #tripEventView = null;
  #eventEditView = null;

  constructor({ eventsContainer, model, onEventUpdate, onEdit }) {
    this.#eventsContainer = eventsContainer;
    this.#model = model;
    this.#eventListView = new EventListView();
    this.#onEventUpdate = onEventUpdate;
    this.#onEdit = onEdit;
    this.#destinations = model.destinations;
    this.#offers = model.offers;
  }

  init(event) {
    this.#tripEventView = new EventItemView({
      event,
      destinations: this.#destinations,
      offers: this.#offers,
      onClick: () => this.#switchToEditMode(event),
      onFavoriteClick: () => this.#handleFavoriteClick(event)
    });
    render(this.#tripEventView, this.#eventsContainer);
  }

  resetView() {
    if (this.#eventEditView) {
      this.#switchToViewMode();
    }
  }

  #switchToEditMode(event) {
    this.#onEdit();

    this.#eventEditView = new EditingForm({
      event,
      events: this.#model.events,
      destinations: this.#model.destinations,
      offers: this.#model.offers,
      onSubmit: () => this.#switchToViewMode(),
      onClick: () => this.#switchToViewMode()
    });

    replace(this.#eventEditView, this.#tripEventView);

    this.#onKeyDownHandler = (evt) => this.#onDocumentKeyDown(evt);
    document.addEventListener('keydown', this.#onKeyDownHandler);
  }

  #switchToViewMode() {
    if (this.#eventEditView) {
      replace(this.#tripEventView, this.#eventEditView);
      this.#eventEditView = null;
    }
    document.removeEventListener('keydown', this.#onKeyDownHandler);
  }

  #onDocumentKeyDown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#switchToViewMode();
    }
  }

  #handleFavoriteClick(event) {
    const updatedEvent = { ...event, isFavorite: !event.isFavorite };
    this.#onEventUpdate(updatedEvent);
    this.#rerenderEvent(updatedEvent);
  }

  #rerenderEvent(updatedEvent) {
    const newTripEventView = new EventItemView({
      event: updatedEvent,
      destinations: this.#destinations,
      offers: this.#offers,
      onClick: () => this.#switchToEditMode(updatedEvent),
      onFavoriteClick: () => this.#handleFavoriteClick(updatedEvent)
    });

    replace(newTripEventView, this.#tripEventView);
    this.#tripEventView = newTripEventView;
  }
}
