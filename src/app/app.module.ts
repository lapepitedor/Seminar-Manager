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
import { SeminarEditComponent } from './seminar-edit/seminar-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteGuard } from './shared/route.guard';
import { AuthentificationService } from './shared/authentification.service';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
const routes: Routes = [
  { path: 'person', component: PersonListComponent, canActivate: [RouteGuard] },
  {
    path: 'person/:id',
    component: PersonEditComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'seminar',
    component: SeminarListComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'person/:edit',
    component: SeminarEditComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: 'logout', component: LogoutComponent },
  
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonListComponent,
    SeminarListComponent,
    PersonEditComponent,
    SeminarEditComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PersonService, RouteGuard, AuthentificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
