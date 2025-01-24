import {SORT_OPTIONS} from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

function createSortTemplate() {
  return `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${SORT_OPTIONS.map(({ id, value, label, isDisabled, isChecked }) => `
        <div class="trip-sort__item  trip-sort__item--${value}">
          <input
            id="${id}"
            class="trip-sort__input  visually-hidden"
            type="radio"
            name="trip-sort"
            value="${value}"
            ${isChecked ? 'checked' : ''}
            ${isDisabled ? 'disabled' : ''}>
          <label class="trip-sort__btn" for="${id}">${label}</label>
        </div>
      `).join('')}
    </form>
  `;
}

export default class SortsView extends AbstractView {
  #onSortTypeChange = null;

  constructor({ onSortTypeChange }) {
    super();
    this.#onSortTypeChange = onSortTypeChange;
    this.element.addEventListener('change', this.#handleSortTypeChange);
  }

  get template() {
    return createSortTemplate();
  }

  #handleSortTypeChange = (evt) => {
    if (!evt.target.matches('.trip-sort__input')) {
      return;
    }

    this.#onSortTypeChange(evt.target.value);
  };
}


