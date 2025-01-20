import AbstractView from '../framework/view/abstract-view';
import { humanizeDueDate, humanizeDueTime, getDifferenceTime, machineDueFormat } from '../utils';

function createEventOffersTemplate(eventOffers) {
  return eventOffers.map((eventOffer) => (
    `<li class="event__offer">
      <span class="event__offer-title">${eventOffer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${eventOffer.price}</span>
    </li>`
  )).join('');
}

const createWayPointTemplate = (event, destinations, offers) => {
  const { type, dateFrom, dateTo, basePrice, isFavorite } = event;
  const currentTime = new Date().toLocaleTimeString();
  const currentDestination = destinations.find((destination) => destination.id === event.destination);
  const typeOffers = offers.find((offer) => offer.type === event.type).offers;
  const eventOffers = typeOffers.filter((typeOffer) => event.offers.includes(typeOffer.id));
  const date = humanizeDueDate(dateFrom);
  const differenceTime = getDifferenceTime(dateFrom, dateTo);

  return `<li class="trip-events__item">
    <div class="event">
    <p>${currentTime}</p>
      <time class="event__date" datetime="${machineDueFormat(date)}">${date}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${currentDestination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${humanizeDueTime(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${humanizeDueTime(dateTo)}</time>
        </p>
        <p class="event__duration">${differenceTime}M</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createEventOffersTemplate(eventOffers)}
      </ul>
      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class EventItemView extends AbstractView {
  #event = null;
  #destinations = [];
  #offers = [];
  #onClick = null;
  #onFavoriteClick = null;

  constructor({ event, destinations, offers, onClick, onFavoriteClick }) {
    super();
    this.#event = event;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#onClick = onClick;
    this.#onFavoriteClick = onFavoriteClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onEditBtnClick);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#onFavoriteBtnClick);
  }

  #onEditBtnClick = (evt) => {
    evt.preventDefault();
    this.#onClick();
  };

  #onFavoriteBtnClick = (evt) => {
    evt.preventDefault();
    this.#onFavoriteClick();
  };

  get template() {
    return createWayPointTemplate(this.#event, this.#destinations, this.#offers);
  }
}
