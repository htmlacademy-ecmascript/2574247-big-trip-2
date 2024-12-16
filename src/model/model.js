import {getEvents} from '../mocks/events.js';
import {getDestinations} from '../mocks/destinations.js';
import {getOffers} from '../mocks/offers.js';
const events = getEvents();
const destinations = getDestinations();
const offers = getOffers();
export default class Model{

  #events = events;
  #destinations = destinations;
  #offers = offers;

  getEvents (){
    return this. #events;
  }

  getDestinations (){
    return this.#destinations;
  }

  getOffers(){
    return this.#offers;
  }
}

