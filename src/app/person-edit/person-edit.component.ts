import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  private id: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }
  
 public getId(): number {
    return this.id;
  }

  ngOnInit(): void {}
}
