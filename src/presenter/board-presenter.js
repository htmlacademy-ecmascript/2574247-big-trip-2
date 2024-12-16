import {render, RenderPosition} from '../render.js';
import FiltersView from '../view/filters-view.js';
import SortsView from '../view/sorts-view.js';
import EventListView from '../view/events-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventItemView from '../view/event-item-view.js';
import EventView from '../view/event-view.js';

export default class BoardPresenter{

  filtersView = new FiltersView();
  sortsViev = new SortsView();
  eventListView = new EventListView();
  eventView = new EventView();

  constructor({filtersContainer, eventsContainer, model}){

    this.model = model;
    this.filtersContainer = filtersContainer;
    this.eventsContainer = eventsContainer;
  }

  init(){
    const destinations = this.model.getDestinations();
    const offers = this.model.getOffers();
    const events = this.model.getEvents();

    render(new FiltersView(), this.filtersContainer);
    render(new SortsView(), this.eventsContainer);
    render(this.eventListView, this.eventsContainer, RenderPosition.AFTEREND);
    render(new EventEditView(events, destinations, offers), this.eventListView.getElement(), RenderPosition.AFTERBEGIN);
    //render(new EventView(), this.eventListView.getElement(), RenderPosition.AFTERBEGIN);

    for(const event of events){
      render(new EventItemView(event, destinations, offers), this.eventListView.getElement());
    }
  }
}
