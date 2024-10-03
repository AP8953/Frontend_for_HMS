# Hospital Management System

The **Hospital Management System** is a comprehensive web application designed to streamline various administrative and clinical tasks within a hospital environment. It integrates front-end and back-end technologies to create an efficient, user-friendly platform that enables hospital staff to manage patients, appointments, medicines, and other essential functions securely and reliably.

Built using **Angular** for the front-end and **Spring Boot** for the back-end, this system adheres to industry best practices in modularity, scalability, and security.

## Features

### Patient Management:
- **Add**, **update**, and **view** patient details.
- *Search* and *filter* patients based on various criteria.

### Appointment Scheduling:
- **Manage** doctor and patient appointments.
- *Book*, *update*, or *cancel* appointments with ease.

### Medicine Management:
- **Manage** medicine inventory, including adding and updating medicine details.

### Role-Based Access Control:
- **Admin**: Manage hospital records, control access, and view all patient and appointment data.
- **Doctor**: Manage appointments and view assigned patients' details.
- *Authentication* and *Authorization* using Angular Route Guards and Spring Security.

## Tech Stack

### Front-End: Angular
- Components for different modules such as **Patient**, **Appointment**, **Medicine**, **Admin**, and **Doctor**.
- Services to handle communication with the back-end API.
- Route Guards for protecting restricted routes based on user roles.
- Global styling for a uniform look and feel.

### Back-End: Spring Boot
- **Controller Layer**: Handles incoming HTTP requests and provides endpoints for different operations like creating patients, appointments, and managing medicines.
- **Service Layer**: Contains business logic for interacting with the database and handling data manipulations.
- **Repository Layer**: Uses Spring Data JPA to interact with the database and perform CRUD operations.
- **Database Models (Entities)**: Define the structure of the tables, such as **Patient**, **Appointment**, **Medicine**, etc.
- Configuration via `application.properties`.

## Project Architecture

### Front-End:
The front-end is organized using Angular's modular architecture:
- **Components**: Each key feature (e.g., **Patient**, **Medicine**, **Appointment**) is encapsulated in its own component.
- **Services**: These Angular services (`appointment.service.ts`, `medicine.service.ts`, etc.) handle all HTTP calls to the back-end and ensure separation of concerns.
- **Routing**: Implemented with Angular's `app-routing.module.ts`, which defines paths for all views (e.g., `create-patient`, `view-patient`, `update-medicine`).
- **Guards**: Route guards such as `adminauthguard.service.ts` and `docauthguard.service.ts` secure different areas of the application.

### Back-End:
The back-end is structured into key layers:
- **Controllers**: Handle incoming API requests, such as `PatientController.java`, `AppointmentController.java`, and `MedicineController.java`.
- **Repositories**: Interfaces such as `PatientRepository.java` and `AppointmentsRepository.java` perform database CRUD operations.
- **Entities**: Java classes that represent the database tables (e.g., `Patient.java`, `Medicine.java`, `Appointment.java`).

