import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonService } from './shared/person.service';
import { RouterModule, Routes } from '@angular/router';
import { SeminarListComponent } from './seminar/seminar-list/seminar-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

const routes: Routes = [{ path: 'person', component: PersonListComponent },

  {path:'person/:id', component: PersonEditComponent},
  { path: 'seminar', component: SeminarListComponent},
  { path: '' , redirectTo:'person', pathMatch:'full'}
];


@NgModule({
  declarations: [AppComponent, NavbarComponent, PersonListComponent, SeminarListComponent, PersonEditComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
