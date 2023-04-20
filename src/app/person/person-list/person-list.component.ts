import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person';
import { PersonService } from 'src/app/shared/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  selected: Person | null = null;

  objects: Person[] = [];

  constructor(private service: PersonService) {
    this.objects = this.service.getAll();
    this.service.changed.subscribe(() => {
      this.objects = this.service.getAll();
      this.selected = null;
    });
  }

  ngOnInit(): void {}

  onSelected(index: number) {
    this.selected = this.objects[index];
  }

  onEdit() {
    console.log('Edit successfully');
  }

  onDelete() {
    if (this.selected !== null) {
      this.service.delete(this.selected);
    }
  }
}
