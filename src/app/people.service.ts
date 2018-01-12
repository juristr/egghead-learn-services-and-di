import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
  name = 'Juri';

  getPerson() {
    return {
      name: this.name,
      age: 31
    };
  }

  setPersonName(value) {
    this.name = value;
  }
}
