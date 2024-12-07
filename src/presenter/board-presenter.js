import {render, RenderPosition} from '../render.js';
import FiltersView from '../view/filters-view.js';
import SortsView from '../view/sorts-view.js';
import EventEditListView from '../view/events-list-view.js';
import EventEditView from '../view/point-edit.js';
import TripEventsItemsView from '../view/trip-events-point-view.js';
import AddNewPointView from '../view/add-new-point-view.js';

export default class BoardPresenter{

  filtersView = new FiltersView();
  sortsViev = new SortsView();
  eventEditListView = new EventEditListView();
  addNewPointView = new AddNewPointView();

  constructor({filtersContainer, sortsContainer}){

    this.filtersContainer = filtersContainer;
    this.sortsContainer = sortsContainer;
  }

  init(){
    render(new FiltersView(), this.filtersContainer);
    render(new SortsView(), this.sortsContainer);
    render(this.eventEditListView, this.sortsContainer, RenderPosition.AFTEREND);
    render(new EventEditView(), this.eventEditListView.getElement(), RenderPosition.AFTERBEGIN);
    render(new AddNewPointView(), this.eventEditListView.getElement(), RenderPosition.AFTERBEGIN);
    for(let i = 0; i < 3; i += 1){
      render(new TripEventsItemsView(), this.eventEditListView.getElement());
    }
  }
}
