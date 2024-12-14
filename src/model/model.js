import {events} from '../mocks/events.js';
import {destinations} from '../mocks/destinations.js';
import {offers} from '../mocks/offers.js';

export default class Model{

  events = events;
  destinations = destinations;
  offers = offers;

  getEvents (){
    return this.events;
  }

  getDestinations (){
    return this.destinations;
  }

  getOffers(){
    return this.offers;
  }
}

