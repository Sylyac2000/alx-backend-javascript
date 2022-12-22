// Abstract class for a building
export default class Building {
  // Constructor
  constructor(sqft) {
    // Store the attribute in an "underscore" attribute
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be implemented by any class that extends from Building
  /* evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  } */
}
