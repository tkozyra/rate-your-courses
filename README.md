# RateYourCourses

Web application for viewing, grading and enrolling in academic courses, made with Angular 8 and Firebase.

---

## Table of Contents

- [About project](#about-project)
- [Project demo](#project-demo)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Build](#build)

---

## About project

Application was created as a part of the course 'Introduction to web applications' at the AGH University of Science and Technology.

### Roles in the application

There are three roles in the application:
- Guest user
- Logged in user
- Administrator

### Functionalities

- All users are allowed to:
  - **View available courses** and **filter** them based on available filters:
    - Number of ECTS points assigned to the course
    - Semester on which the course is taking place
    - Course name
  - **View course details**

- Logged in user can also:
  - **Rate** courses
  - **Enroll** in courses

- Administrator can also:
  - **Create** new courses
  - **Delete** existing courses

---

## Project demo

Demo available at: https://tkozyra.github.io/rate-your-courses
> To access the application, register with any email address (there is no email confirmation needed in the demo)

---

## Technologies

Technologies used in the project:
- TypeScript
- Angular 8
- Firebase

---

## Screenshots

### User views

<img width="800" src="https://i.imgur.com/XYzGjuC.png"/>
<img width="800" src="https://i.imgur.com/2O39p5v.png"/>
<img width="800" src="https://i.imgur.com/l7y9X1a.png"/>

### Admin views

<img width="800" src="https://i.imgur.com/AwGSNwZ.png"/>
<img width="800" src="https://i.imgur.com/u4DaLVY.png"/>

---

## Build

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
