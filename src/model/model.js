import { getDestinations } from '../mocks/destinations.js';
import { getEvents } from '../mocks/events.js';
import { getOffers } from '../mocks/offers.js';

export default class PointModel {
  #events = [];
  #destinations = [];
  #offers = [];

  init() {
    this.#events = getEvents();
    this.#destinations = getDestinations();
    this.#offers = getOffers();
  }

  get events() {
    return this.#events;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  updateEvent(updatedEvent) {
    const index = this.#events.findIndex((event) => event.id === updatedEvent.id);
    if (index !== -1) {
      this.#events = [
        ...this.#events.slice(0, index),
        updatedEvent,
        ...this.#events.slice(index + 1)
      ];
    }
  }
}
