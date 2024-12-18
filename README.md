# Flight Booking Application

FlightEase is an application that allows users to search for flights, make bookings, and manage their profiles with ease. This README provides an overview of the app's features and user flow.

# Naan Mudhalvan: Flight Booking Application

This project is developed as part of the Naan Mudhalvan Program. The course is MERN Stack Powered by MongoDB (subject code: NM1042), conducted for Tagore Engineering College (College Code: 4127). The platform is built using the MERN (MongoDB, Express, React, Node.js) stack.

**project demo link**
https://drive.google.com/file/d/1HtOnSqfq1R_DYDxlTodo6CqFd_iR0c8Q/view?usp=drivesdk

**Status**: Still under development...

## Team Members

| Name | NM ID | Email Address | AU ID |
|------|-------|---------------|--------|
| **KARUPPUSAMY P** | D44A88C66031CF4B8A0446EC00FE9EC9 | karuppusamykanesh1503@gmail.com | AU412721104301 |
| **VIMALESHWARAN V** | 91CE2C883B058F1B9E14F3D6E551FB5F | vimaleshwaranvelayudham@gmail.com | AU412721104058 |
| **KATHIRAVAN K** | FB8958CFD2D3DDD95AF4FEA49705C375 | kathir29022k04@gamil.com | AU412721104018 |
| **MANOJ M** | 9C0AEBE0EADBBB6A6EE4E008937E1409 | san066157@gmail.com | AU412721104025 |

We are the students of **Computer Science and Engineering** (CSE) department pursuing **IV Year 7th semester.**

---

## Table of Contents

- [Features](#features)
- [User Flow](#user-flow)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features
- **Flight Search**: Users can search for flights based on their travel destination, dates, and other preferences.
- **User Profiles**: Users can create and manage their profiles, including personal information and booking history.
- **Flight Selection**: Browse available flights with details such as airline, departure/arrival times, price, and class options.
- **Flight Booking**: Easily book flights by selecting options such as seat class, baggage options, and payment method.
- **Booking History**: Users can view their current and past flight bookings, including ticket details and status.
- **Flight Confirmation**: Receive instant booking confirmation with all necessary flight details.

## User Flow

1. **Start**: Users open the FlightEase app to begin their flight search.
2. **Home Page**: Users land on the homepage, where they can enter their departure and destination cities, travel dates, and preferences.
3. **Search Results**: Users can view the available flights based on their search criteria, including filters for class, price, airline, and departure times.
4. **Flight Selection**: Users select a flight from the search results, which provides more details like departure time, arrival time, and price.
5. **Book Flight**: Users proceed to book their selected flight by providing personal information, choosing additional options (e.g., baggage, meal preferences), and making payment.
6. **View Bookings**: Users can view their current and past flight bookings in their profile.
7. **Booking Confirmation**: Once the flight is successfully booked, users receive a booking confirmation with all relevant details.
8. **End**: The user flow concludes when the user has successfully booked and received confirmation for their flight.

## Technologies Used

- **MongoDB**: NoSQL database to store user data, flight details, and booking information.
- **Express.js**: Web framework for building the backend API.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for building the backend of the application.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

## Steps to Run the Application Locally

Follow these steps to set up the application on your local machine

### 1. Clone the Repository

```bash
    git clone https://github.com/Karuppusamy03/Flight-booking-app.git
```

### 2. Navigate to the cloned repository

```bash 
    cd Flight-booking-application
```

### 3. Configuration Settings
Rename the environment file in the client side.
```bash
    Rename .env.local1 to .env.local
```

### 4. Setting up the frontend
Open a new terminal in VS Code and run the following commands to install the required packages and start the frontend

```bash
    cd Client
    npm install   # install the required packages
    npm run dev
```
Open a browser and navigate to http://localhost:3000 to access the frontend of the application.

### 5. Setting up the backend
Open another terminal in VS Code and run the following commands to install the necessary packages and start the backend server

```bash 
    cd server
    npm install      # install the required packages
    node server.js   # or use nodemon for automatic restarts with `nodemon server.js`
```
The backend server will start on **PORT 5000** by default. You can adjust this setting in the .env file if needed.

---

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv

---

## Additional Information

For further assistance or doubts, reach out to any team member listed above or find their GitHub ID from the collaborators list.

---
