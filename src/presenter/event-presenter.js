import EventItemView from '../view/event-item-view.js';
import EditingFormView from '../view/editing-form-view.js';
import { render, replace } from '../framework/render.js';

export default class EventPresenter {
  #eventsContainer = null;
  #model = null;
  #onKeyDownHandler = null;
  #onEventUpdate = null;
  #onEdit = null;
  #destinations = [];
  #offers = [];
  #tripEventView = null;
  #eventEditView = null;

  constructor({ eventsContainer, model, onEventUpdate, onEdit }) {
    this.#eventsContainer = eventsContainer;
    this.#model = model;
    this.#onEventUpdate = onEventUpdate;
    this.#onEdit = onEdit;
  }

  init(event) {
    this.#destinations = this.#model.destinations;
    this.#offers = this.#model.offers;

    const prevTripEventView = this.#tripEventView;
    const prevEventEditView = this.#eventEditView;

    this.#tripEventView = new EventItemView({
      event,
      destinations: this.#destinations,
      offers: this.#offers,
      onClick: () => this.#switchToEditMode(event),
      onFavoriteClick: () => this.#handleFavoriteClick(event),
    });

    if (!prevTripEventView && !prevEventEditView) {
      render(this.#tripEventView, this.#eventsContainer);
      return;
    }

    if (prevTripEventView) {
      replace(this.#tripEventView, prevTripEventView);
    }

    if (prevEventEditView) {
      replace(this.#tripEventView, prevEventEditView);
      this.#eventEditView = null;
    }
  }

  resetView() {
    if (this.#eventEditView) {
      this.#switchToViewMode();
    }
  }

  #switchToEditMode(event) {
    this.#onEdit();

    this.#eventEditView = new EditingFormView({
      event,
      events: this.#model.events,
      destinations: this.#destinations,
      offers: this.#offers,
      onSubmit: () => this.#switchToViewMode(),
      onClick: () => this.#switchToViewMode(),
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
  }
}
