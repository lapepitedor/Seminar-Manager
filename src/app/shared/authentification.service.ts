import { EventEmitter, Injectable,Output } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from '../model/Person';


@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {

  @Output() changed = new EventEmitter();

  private curren_user: Person | null = null;
  

  constructor(private service: PersonService) {}

  login(email: string, password: string)
  {
    this.curren_user = this.service.byEmailAndPassword(email, password);
        this.changed.emit();
    return this.isLogginIn;
  }

  logout() {
    this.curren_user = null;
    this.changed.emit();

  }

  isLogginIn() {
    return this.curren_user != null;
  }
}
