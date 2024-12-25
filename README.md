# Volunteer Management System - Frontend

#Live Link: https://volunteer-management-3413a.web.app

This repository contains the frontend code for the Volunteer Management System. The application is designed to connect volunteers and organizations efficiently, using a modern and user-friendly interface.

## Technologies Used

- *React.js*: For building the user interface.
- *Tailwind CSS*: For styling components.
- *Daisy UI*: For pre-styled UI components.
- *React Router*: For navigation and routing.
- *Axios*: For making API requests.

## Features

- Dynamic volunteer listing and filtering.
- Authentication and role-based access.
- Integration with the backend for real-time data.
- Responsive design for mobile and desktop.

## Getting Started

Follow the steps below to run the frontend locally:

### Prerequisites

- Node.js and npm installed on your machine.
- A backend server for API requests (refer to the backend repository).

### Installation

1. Clone the repository:
   
git clone git@github.com:programming-hero-web-course2/b10a11-client-side-alaminislamrahat.git

2. Navigate to the project directory:
   
cd volunteer-management-frontend

3. Install dependencies:
   
npm install

4. Create an .env file in the root of your project and configure the API URL:
   
env
REACT_APP_API_URL=http://localhost:5000

### Running the Application

Start the development server:
npm start

The application will be available at http://localhost:3000.

## Folder Structure

/src
/components
/pages
/hooks
/utils
App.js
index.js
tailwind.config.js

## Deployment

To build and deploy the project:
npm run build

Host the build folder on platforms like Netlify or Vercel.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
