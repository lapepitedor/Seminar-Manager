import { Component,OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  selected: Person | null = null;

  objects: Person[] =
    [
    new Person('1', 'Messu', 'Brinda', 'mb@gmail.com'),
    new Person('2', 'Alex ', 'Mbida', 'am@gmail.com'),
    new Person('3', 'Marco', 'Koung', 'mg@gmail.com'),
  ];
  constructor() {}

  ngOnInit(): void {}

  onSelected(index: number) {
    this.selected = this.objects[index];
    console.log(this.selected);
  }
}
