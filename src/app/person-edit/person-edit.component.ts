import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../model/Person';
import { PersonService } from '../shared/person.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
})
export class PersonEditComponent implements OnInit {
  obj: Person | null = null;
   form !: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonService
  ) {

    let id = this.route.snapshot.params['id'];
    if (id == 0)
    {
      this.obj = new Person(0, "", "", "", "",false);
    }
    else
    {
       this.obj = this.service.byId(id);
    }
    
      console.log(this.obj);
    
    this.form = new FormGroup({
      firstname: new FormControl(this.obj?.firstname, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl(this.obj?.lastname, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(this.obj?.email, [
        Validators.required,
        Validators.email,
      ]),
    });
   /* ONE WAY TO LOAD THE INPUTS OF THE OBJ
    this.form.setValue({
      "firstname": this.obj?.firstname,
      "lastname": this.obj?.lastname,
      "email": this.obj?.email
    });*/

  }

  ngOnInit(): void { }

  onCancel() {
    //this.router.navigate(["/person"]);
    console.log("cancelled");
  }

  onSubmit() {
    if (this.obj) {

      if (this.form.invalid)
        return;
      
      this.obj.firstname = this.form.controls['firstname'].value;
      this.obj.lastname = this.form.controls['lastname'].value;
      this.obj.email = this.form.controls['email'].value;
      this.service.save(this.obj);
      this.router.navigate(["/person"]);
    }

  }
}
