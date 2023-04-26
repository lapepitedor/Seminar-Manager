import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../model/Person';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  private obj: Person | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonService
  ) {
    let id = this.route.snapshot.params['id'];
    this.obj = this.service.byId(id);
    console.log(this.obj);
  }

 
  public getObj() {
    return this.obj;
  }

  ngOnInit(): void {}
}
