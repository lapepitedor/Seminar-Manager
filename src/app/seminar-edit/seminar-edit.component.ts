import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';  
import { Seminar } from '../model/Seminar';
import { ActivatedRoute, Router } from '@angular/router';
import { SeminarService } from '../shared/seminar.service';

@Component({
  selector: 'app-seminar-edit',
  templateUrl: './seminar-edit.component.html',
  styleUrls: ['./seminar-edit.component.css'],
})
export class SeminarEditComponent {
  sem: Seminar | null = null;
  form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SeminarService //load id in the route
  ) {
    let id = this.route.snapshot.params['id'];
    if (id == 0) {
      this.sem = new Seminar(0, '', '', new Date(0));
    } else {
      this.sem = this.service.byId(id);//if id =0 we creat ea new obj
    }

    console.log(this.sem);

    this.form = new FormGroup({
      name: new FormControl(this.sem?.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      venue: new FormControl(this.sem?.venue, [
        Validators.required,
        Validators.minLength(3),
      ]),
      date: new FormControl(this.sem?.date, [
        Validators.required,      
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)
      ]),
    });
  }

  onCancel() {
    this.router.navigate(["/seminar"]);
   
  }

  onSubmit() {
    if (this.sem) {
      if (this.form.invalid) return;

      this.sem.name = this.form.controls['name'].value;
      this.sem.venue = this.form.controls['venue'].value;
      this.sem.date = this.form.controls['date'].value;
      this.service.save(this.sem);
      this.router.navigate(['/seminar']);
    }
  }
}
