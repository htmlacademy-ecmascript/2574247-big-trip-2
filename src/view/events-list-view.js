import {createElement} from '../render.js';

function createEventsEditListView(){
  return '<ul class="trip-events__list"></ul>';
}

export default class EventEditListView{
  getTemplate(){
    return createEventsEditListView();
  }

  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
