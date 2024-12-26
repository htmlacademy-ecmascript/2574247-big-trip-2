import {render, replace} from '../framework/render.js';
import {RenderPosition} from '../render.js';
import FiltersView from '../view/filters-view.js';
import SortsView from '../view/sorts-view.js';
import EventListView from '../view/events-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventItemView from '../view/event-item-view.js';

export default class BoardPresenter{

  filtersView = new FiltersView();
  sortsViev = new SortsView();
  eventListView = new EventListView();
  #filtersContainer = null;
  #eventsContainer = null;
  #currentEditView = null;

  constructor({filtersContainer, eventsContainer, model}){
    this.model = model;
    this.#filtersContainer = filtersContainer;
    this.#eventsContainer = eventsContainer;
  }

  init(){
    const destinations = this.model.destinations;
    const offers = this.model.offers;
    const events = this.model.events;

    render(new FiltersView(), this.#filtersContainer);
    render(new SortsView(), this.#eventsContainer);
    render(this.eventListView, this.#eventsContainer, RenderPosition.AFTEREND);

    for (const event of events) {
      this.#renderEventItemView(event, destinations, offers);
    }
  }

  #renderEventItemView(event, destinations, offers) {

    const eventItemView = new EventItemView(
      event,
      destinations,
      offers,
      () => this.#handleEventToogleClick(event, destinations, offers)
    );
    eventItemView.setEventButtonClickHandler();
    render(eventItemView, this.eventListView.element);
  }

  #handleEventToogleClick(event, destinations, offers){
    if (this.#currentEditView) {
      this.#closeEditForm();
    }

    this.#currentEditView = new EventEditView([event], destinations, offers);

    this.#currentEditView.element.querySelector('.event__rollup-btn')
      .addEventListener('click', () => this.#closeEditForm());
    this.#currentEditView.element.querySelector('.event__save-btn')
      .addEventListener('click', (evt) => this.#handleSaveForm(evt, event));

    replace(
      this.#currentEditView,
      new EventItemView(event, destinations, offers, () => this.#handleEventToogleClick(event, destinations, offers))
    );
  }

  #closeEditForm(){
    if(this.#currentEditView){
      replace(
        new EventItemView(
          this.#currentEditView.getEvent(),
          this.model.destinations,
          this.model.offers,
          () => this.#handleEventToogleClick(this.#currentEditView.getEvent(), this.model.destinations, this.model.offers)
        ),
        this.#currentEditView
      );
      this.#currentEditView = null;
    }
  }

  //#handleSaveForm(evt, event) {
    //evt.preventDefault();

    // Здесь можно добавить логику сохранения изменений
    //console.log('Форма сохранена для события:', event);

    //this.#closeEditForm(); 
}
