import { Injectable, Output } from '@angular/core';
import { Person } from '../model/Person';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  @Output() changed = new EventEmitter();
  objects: Person[] = [
    new Person(1, 'Messu', 'Brinda', 'mb@gmail.com','test',    true),
    new Person(2, 'Alex ', 'Mbida', 'am@gmail.com', 'test1', true),
    new Person(3, 'Marco', 'Koung', 'mg@gmail.com','TEST', false),
  ];
  getAll() {
    return this.objects.slice();
  }

  private index(id: number) {
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  delete(id: number) {
    let index = this.index(id);
    if (index !== -1) {
      this.objects.splice(index, 1);
      this.changed.emit();
    }
  }

  byId(id: number) {
    let index = this.index(id);
    if (index !== -1) {
      return this.objects[index];
    } else {
      return null;
    }
  }
  byEmailAndPassword(email: string, password: string): Person | null {
    for (let i = 0; i < this.objects.length; i++){
      let obj = this.objects[i];
      if (obj.canlogin && obj.email.toUpperCase() ==
        email.toUpperCase() && obj.password == password)
        return obj;
    }
    return null;
  }
}
