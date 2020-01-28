import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

//custom app components
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseRatingComponent } from './course-details/course-rating/course-rating.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { SuccessAlertComponent } from './alerts/success-alert/success-alert.component';
import { CoursesFilterComponent } from './courses-filter/courses-filter.component';

import { FilterPipe } from './filter.pipe';
import { EctsFilterPipe } from '../app/pipes/ects-filter.pipe';
import { SemesterFilterPipe } from '../app/pipes/semester-filter.pipe';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CourseComponent,
    DashboardComponent,
    NavigationComponent,
    CourseRatingComponent,
    AddCourseComponent,
    SuccessAlertComponent,
    CoursesFilterComponent,
    FilterPipe,
    EctsFilterPipe,
    SemesterFilterPipe,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,

    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    
    NgMultiSelectDropDownModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
