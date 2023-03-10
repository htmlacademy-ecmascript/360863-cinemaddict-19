import {createElement} from '../render';

function createFilmListView () {
  return (`
    <div class="films-list__container">
    </div>
  `);
}

export default class FilmListView {
  #element;

  get template() {
    return createFilmListView();
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
