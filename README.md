# Doctor Appointment Booking Backend

## Overview

This is the backend for a Doctor Appointment Booking system, built with Node.js, Express, and MongoDB. The system allows users to register, login, and book appointments with doctors based on their location. Doctors can also log in to view their scheduled appointments.

## Features

- **User Registration and Authentication**: Users can register and log in to their accounts. JWT is used for secure authentication.
- **Doctor Listing by Location**: Users can view a list of doctors available in their city.
- **Booking Appointments**: Users can book an appointment with a doctor of their choice.
- **Doctor Dashboard**: Doctors can log in to view appointments booked by users.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/doctor-appointment-backend.git
   cd doctor-appointment-backend


  ## 2 Set up environment variables

  ## Create a .env file in the root of your project and add the following variables:


## LOGIN

- POST /api/auth/login


 ## GET DOCTOR

- GET /doctors
-Headers:



## BOOK APPOINTMENTS

POST /api/book/book
Body Parameters:



## TO LOGIN AS DOCTOR
POST /api/doctor/login
Body Parameters:


## Folder Structure


- **├── .env                 # Environment variables
- **├── db                   # Database connection
- **│   └── db.js
- **├── multer               # Multer configuration for file uploads
- **│   └── multer.js
- **├── routes               # Express routes
- **│   ├── auth.js
- **│   ├── bookingRoute.js
- │   └── doctorRoute.js
- ├── Schema               # Mongoose schemas
- │   ├── bookingSchema.js
- │   ├── userSchema.js
- │   └── doctorSchema.js
- ├── Test                 # Mock data and test utilities
- │   └── testDoctor.js
- ├── app.js               # Main application file
- └── server.js   # Server configuration

##Running Tests
To run the tests, you can use:

- npm test
## Contributing
Contributions are welcome! Please create a pull request or open an issue for any bugs or feature requests.
