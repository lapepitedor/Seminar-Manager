import { Injectable, Output } from '@angular/core';
import { Person } from '../model/Person';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  @Output() changed = new EventEmitter();
  objects: Person[] = [
    new Person(1,'Messu', 'Brinda', 'mb@gmail.com'),
    new Person(2,'Alex ', 'Mbida', 'am@gmail.com'),
    new Person(3,'Marco', 'Koung', 'mg@gmail.com'),
  ];
  getAll() {
    return this.objects.slice();
  }

  delete(obj:Person) {

    let index = this.objects.findIndex((oBJ) => oBJ === obj);
    this.objects.splice(index, 1);
    this.changed.emit(obj);
   
  }
}
