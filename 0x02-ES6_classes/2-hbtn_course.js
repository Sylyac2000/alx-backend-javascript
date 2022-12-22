export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (!Number.isInteger(length)) {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students) || students.some((s) => typeof s !== 'string')) {
      throw new Error('students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (!Number.isInteger(value)) {
      throw new Error('length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || value.some((s) => typeof s !== 'string')) {
      throw new Error('students must be an array of strings');
    }
    this._students = value;
  }
}
