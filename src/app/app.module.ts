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
import { initializeApp } from 'firebase/app';
import { SeminarService } from './shared/seminar.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

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
    path: 'seminar/:id',
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

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDLMqU6bQP0uIJqyUWRRj5bx-xF1lBsfwA",
  authDomain: "seminarmanger.firebaseapp.com",
  projectId: "seminarmanger",
  storageBucket: "seminarmanger.appspot.com",
  messagingSenderId: "200606415743",
  appId: "1:200606415743:web:65410a7f2a4ca33757b84a"
};



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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    PersonService,
    SeminarService,
    RouteGuard,
    AuthentificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
