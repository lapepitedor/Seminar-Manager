import { EventEmitter, Injectable, Output } from '@angular/core';
import { Seminar } from '../model/Seminar';

@Injectable({
  providedIn: 'root',
})
export class SeminarService {
  @Output() changed = new EventEmitter();
  
  object: Seminar[] = [
    new Seminar(
      1,
      'Objectoriented Programming',
      'HSHL',
      new Date('2021-04-01')
    ),
    new Seminar(2, 'Praktische Informatique', 'HSOL', new Date('2021-06-01')),
  ];

  constructor() { }
  
  getAll() {
    return this.object.slice();
  }

  private index(id: number) {
    for (let i = 0; i < this.object.length; i++) {
      if (this.object[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  byId(id: number) {
    let index = this.index(id);
    if (index !== -1) {
      return this.object[index];
    } else {
      return null;
    }
  }

  save(obj: Seminar) {
    let index = this.object.findIndex((x) => x.id == obj.id);

    if (index >= 0) {
      this.object[index] = obj;
    } else {
      let new_id =
        Math.max.apply(
          Math,
          this.object.map(function (o) {
            return o.id;
          })
        ) + 1;
      obj.id = new_id;
      this.object.push(obj);
    }

    this.changed.emit(this.getAll());
  }

  delete(id: number) {
    let index = this.index(id);
    if (index !== -1) {
      this.object.splice(index, 1);
      this.changed.emit();
    }
  }
}
