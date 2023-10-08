/* eslint-disable require-jsdoc */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !==
      Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line require-jsdoc
  set sqft(value) {
    this._sqft = value;
  }
}
