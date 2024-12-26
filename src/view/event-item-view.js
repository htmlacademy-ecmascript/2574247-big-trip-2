import AbstractView from '../framework/view/abstract-view.js';
import { humanizePointDueDate, humanizePointDueTime } from '../utils';
import {getDifferenceTime} from '../utils.js';

function createEventOffersTemplate(eventOffers) {
  return eventOffers.map((eventOffer) => (
    `<li class="event__offer">
      <span class="event__offer-title">${eventOffer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${eventOffer.price}</span>
    </li>`
  )).join('');
}

function createEventItemTemplate(event, destinations, offers){

  const {basePrice, isFavorite, dateFrom, dateTo, type} = event;

  const typeOffers = offers.find((offer) => offer.type === event.type).offers;
  const eventOffers = typeOffers.filter((typeOffer) => event.offers.includes(typeOffer.id));
  const eventDestination = destinations.find((destination) => destination.id === event.destination);

  const differenceTime = getDifferenceTime(dateFrom, dateTo);

  return`
    <li class="trip-events__item">
      <div class="event">
      <time class="event__date" datetime="2024-10-18">${humanizePointDueDate(dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${eventDestination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">${humanizePointDueTime(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${humanizePointDueTime(dateTo)}</time>
        </p>
        <p class="event__duration"> ${differenceTime}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createEventOffersTemplate(eventOffers)}
      </ul>
     <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''} " type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
`;
}

export default class EventItemView extends AbstractView{
  #handleClick = null;
  #event;
  #destinations;
  #offers;
  constructor (event, destinations, offers, onClick){
    super();
    this.#handleClick = onClick;
    this.#event = event;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template(){
    return createEventItemTemplate(this.#event, this.#destinations, this.#offers);
  }

  setEventButtonClickHandler() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler.bind(this));
    //console.log('Event button click handler set');
  }

  #clickHandler(evt){
    evt.preventDefault();
    //console.log('Event button clicked');
    if(this.#handleClick){
      this.#handleClick();
    }
  }
}


