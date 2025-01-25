import { humanizeDueTime, capitalize } from '../utils.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

function createEventTypeTemplate(eventTypes, eventId, type) {
  return eventTypes.map((eventType) => (
    `<div class="event__type-item">
      <input id="event-type-${eventType}-${eventId}" class="event__type-input visually-hidden" type="radio"
      name="event-type" value="${eventType}" ${eventType === type ? 'checked' : ''}>
      <label class="event__type-label event__type-label--${eventType}"
       for="event-type-${eventType}-${eventId}">${capitalize(eventType)}</label>
    </div>`
  )).join('');
}

function createDestinationTemplate(destinations) {
  return destinations.map((destination) => `<option value="${destination.name}"></option>`).join('');
}

function createCheckedTypeOffersTimplate(typeOffers, eventOffers, eventId) {
  return typeOffers.map((typeOffer) => `
  <div class="event__available-offers">
    <div class="event__offer-selector">
      <input class="event__offer-checkbox visually-hidden" id="event-${typeOffer.title}-${eventId}"
      type="checkbox" name="event-${typeOffer.title}" ${eventOffers.map((offer) => offer.id).includes(typeOffer.id) ? 'checked' : ''}>
      <label class="event__offer-label" for="event-${typeOffer.title}-${eventId}">
        <span class="event__offer-title">${typeOffer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${typeOffer.price}</span>
      </label>
    </div>
  </div>`).join('');
}

function createPicturesTemplate(pictures) {
  if (pictures.length === 0) {
    return '';
  }
  return `
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="Event photo"></img>`).join('')}
    </div>
  </div>
  `;
}

function editEventFormTemplate(state, destinations, offers, events) {
  const eventTypes = events.map((evt) => evt.type);
  const { id: eventId, type, dateFrom, dateTo, basePrice, destination, offers: eventOffers } = state;
  const currentDestination = destinations.find((dest) => dest.id === destination);
  const { name = '', description = '', pictures = [] } = currentDestination || {};
  const typeOffers = offers.find((offer) => offer.type === type)?.offers || [];

  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type event__type-btn" for="event-type-toggle-${eventId}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle visually-hidden" id="event-type-toggle-${eventId}" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              ${createEventTypeTemplate(eventTypes, eventId, type)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group event__field-group--destination">
          <label class="event__label event__type-output" for="event-destination-${eventId}">
            ${type}
          </label>
          <input class="event__input event__input--destination" id="event-destination-${eventId}"
            type="text" name="event-destination" value="${name}" list="destination-list-${eventId}">
          <datalist id="destination-list-${eventId}">
            ${createDestinationTemplate(destinations)}
          </datalist>
        </div>

        <div class="event__field-group event__field-group--time">
          <label class="visually-hidden" for="event-start-time-${eventId}">From</label>
          <input class="event__input event__input--time" id="event-start-time-${eventId}" type="text" name="event-start-time" value="${humanizeDueTime(dateFrom)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-${eventId}">To</label>
          <input class="event__input event__input--time" id="event-end-time-${eventId}" type="text" name="event-end-time" value="${humanizeDueTime(dateTo)}">
        </div>

        <div class="event__field-group event__field-group--price">
          <label class="event__label" for="event-price-${eventId}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input event__input--price" id="event-price-${eventId}" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn btn btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">${eventId ? 'Delete' : 'Cancel'}</button>
        ${eventId ? `<button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>` : ''}
      </header>

      <section class="event__details">
        ${typeOffers.length > 0 ? `
          <section class="event__section event__section--offers">
            <h3 class="event__section-title event__section-title--offers">Offers</h3>
            ${createCheckedTypeOffersTimplate(typeOffers, eventOffers, eventId)}
          </section>` : ''}

        ${currentDestination ? (`
          <section class="event__section event__section--destination">
            <h3 class="event__section-title event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>
            ${createPicturesTemplate(pictures)}
          </section>
        `) : ''}
      </section>
    </form>
  </li>`;
}

export default class EditingFormView extends AbstractStatefulView {
  #events = [];
  #destinations = [];
  #offers = [];
  #onSubmit = null;
  #onClick = null;

  constructor({ event, destinations, offers, onSubmit, onClick, events }) {
    super();
    this._setState(EditingFormView.parseEventToState(event));
    this.#events = events;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#onSubmit = onSubmit;
    this.#onClick = onClick;
    this._restoreHandlers();
  }

  get template() {
    return editEventFormTemplate(this._state, this.#destinations, this.#offers, this.#events);
  }

  reset(event) {
    this.updateElement(EditingFormView.parseEventToState(event));
  }

  _restoreHandlers() {
    this.element.addEventListener('submit', this.#onSubmitClick);
    this.element.querySelector('.event__rollup-btn')?.addEventListener('click', this.#onCloseBtnClick);
    this.element.querySelectorAll('.event__type-input').forEach((input) =>
      input.addEventListener('change', this.#onEventTypeChange)
    );
    this.element.querySelector('.event__input--destination')?.addEventListener('change', this.#onDestinationChange);
  }

  #onSubmitClick = (evt) => {
    evt.preventDefault();
    this.#onSubmit();
  };

  #onCloseBtnClick = (evt) => {
    evt.preventDefault();
    this.#onClick();
  };

  #onEventTypeChange = (evt) => {
    this.updateElement({
      type: evt.target.value,
      offers: []
    });
  };

  #onDestinationChange = (evt) => {
    const selectedDestination = this.#destinations.find((destination) => destination.name === evt.target.value);
    if (selectedDestination) {
      this.updateElement({
        destination: selectedDestination.id
      });
    }
  };

  static parseEventToState(event) {
    return {
      ...event
    };
  }

  static parseStateToEvent(state) {
    return {
      ...state
    };
  }
}

