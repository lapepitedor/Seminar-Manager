import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Seminar } from 'src/app/model/Seminar';
import { SeminarService } from 'src/app/shared/seminar.service';

@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.css'],
})
export class SeminarListComponent {
  selected: Seminar | null = null;
  object: Seminar[] = [];

  constructor(private route: Router, private service: SeminarService) {
    this.object = this.service.getAll();
    this.service.changed.subscribe(() => {
      this.object = this.service.getAll();
      this.selected = null;
    });
  }

  onSelected(index: number) {
    this.selected = this.object[index];
  }

  onDelete() {
    if (this.selected !== null) {
      this.service.delete(this.selected.id);
    }
  }
  onEdit() {
    this.route.navigate(['seminar', this.selected?.id]);
  }
  onAdd() {
     
    this.route.navigate(['seminar',0]);
  
  }
}
