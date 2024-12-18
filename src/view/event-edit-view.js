import AbstractView from '../framework/view/abstract-view.js';
//import {createElement} from '../render.js';
import { humanizePointDueTime, capitalize } from '../utils';

function createEventTypeTimplate(eventTypes, eventId, type){
  eventTypes.map((eventType) => (
    `<div class="event__type-item">
      <input id="event-type-${eventTypes}-${eventId}" class="event__type-input  visually-hidden" type="radio"
      name="event-type" value="${eventType}" ${eventType === type ? 'checked' : ''}>
      <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-${eventId}">${capitalize(eventType)}</label>
    </div>`
  )).join('');
}

function getDestinationsTemplate(destinations){
  destinations.map((destination) => `<option value="${destination.name}"></option>`).join('');
}

function getPictures(pictures){
  if(pictures.length === 0){
    return '';
  }
  return `
    <div class="event__photos-container">
    <div class="event__photos-tape">
      ${pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`)}
    </div>
    </div>
    `;
}

function selectsCheckedTypeOffers(pointOffers, eventId, typeOffers){
  return typeOffers.map((typeOffer)=>(
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${typeOffer.title}-${eventId}" type="checkbox"
        name="event-offer-${typeOffer.title}" ${pointOffers.some((offer) => offer.id === typeOffer.id) ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-${typeOffer.title}-${eventId}">
         <span class="event__offer-title">${typeOffer.title}</span>
          &plus;&euro;&nbsp;
        <span class="event__offer-price">${typeOffer.price}</span>
      </label>
    </div>`
  )).join('');
}

function createEventEditTemplate(events, destinations, offers){
  const event = events[0]; //уточнить
  const eventId = event.id;

  const pointDestination = destinations.find((destination) => destination.id === event.destination);
  const typeOffers = offers.find((offer) => offer.type === event.type).offers;
  const pointOffers = typeOffers.filter((typeOffer) => event.offers.includes(typeOffer.id));

  const {basePrice, dateFrom, dateTo, type} = event;
  const {name, description, pictures} = pointDestination;

  const eventTypes = events.map((evt) => evt.type);

  return `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
           <label class="event__type  event__type-btn" for="event-type-toggle-${eventId}">
             <span class="visually-hidden">Choose event type</span>
             <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
           </label>
           <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${eventId}" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
           ${createEventTypeTimplate(eventTypes, eventId, type)}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${eventId}">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-${eventId}" type="text"
          name="event-destination" value="${name || ''}" list="destination-list-${eventId}">
          <datalist id="destination-list-${eventId}">
            ${getDestinationsTemplate(destinations)}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-${eventId}">From</label>
          <input class="event__input  event__input--time" id="event-start-time-${eventId}" type="text" name="event-start-time" value="${humanizePointDueTime(dateFrom)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-${eventId}">To</label>
          <input class="event__input  event__input--time" id="event-end-time-${eventId}" type="text" name="event-end-time" value="${humanizePointDueTime(dateTo)}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-${eventId}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-${eventId}" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">${event.id ? 'Delete' : 'Cancel'}</button>
        ${event.id ? (
    `<button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
            </button>`
  ) : ''}
      </header>

      <section class="event__details">
        ${typeOffers.length > 0 ?
    `<section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
            ${selectsCheckedTypeOffers(pointOffers, eventId, typeOffers)}
          </div>
        </section>`
    : ''}
 ${pointDestination ? (
    `<section class="event__section event__section--destination">
  <h3 class="event__section-title event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>
    ${getPictures(pictures)}
    </section>`
  ) : ''}
    </section>
   </form>
  </li>`;
}
export default class EventEditView extends AbstractView{
  #events;
  #destinations;
  #offers;
  constructor (events, destinations, offers){
    super();
    this.#events = events;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template(){
    return createEventEditTemplate(this.#events, this.#destinations, this.#offers);
  }
}

