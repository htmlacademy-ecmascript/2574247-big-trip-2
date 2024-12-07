import {render, RenderPosition} from '../render.js';
import FiltersView from '../view/filters-view.js';
import SortsView from '../view/sorts-view.js';
import EventListView from '../view/events-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventsItemsView from '../view/events-items-view.js';
import EventView from '../view/event-view.js';

export default class BoardPresenter{

  filtersView = new FiltersView();
  sortsViev = new SortsView();
  eventListView = new EventListView();
  eventView = new EventView();

  constructor({filtersContainer, eventsContainer}){

    this.filtersContainer = filtersContainer;
    this.eventsContainer = eventsContainer;
  }

  init(){
    render(new FiltersView(), this.filtersContainer);
    render(new SortsView(), this.eventsContainer);
    render(this.eventListView, this.eventsContainer, RenderPosition.AFTEREND);
    render(new EventEditView(), this.eventListView.getElement(), RenderPosition.AFTERBEGIN);
    render(new EventView(), this.eventListView.getElement(), RenderPosition.AFTERBEGIN);

    for(let i = 0; i < 3; i += 1){
      render(new EventsItemsView(), this.eventListView.getElement());
    }
  }
}
