# WeatherComponent

## Description
This React component fetches and displays current weather data, including temperature, wind speed, and conditions. It provides real-time updates via WebSocket and dynamically adjusts the display messages based on the weather conditions.

## Features
 - Real-Time Weather Updates: Connects to a WebSocket server to receive live weather updates.
- Dynamic Display: Adjusts help text messages based on temperature and wind speed to provide context to users.
- Responsive Design: Designed with Chakra UI for a clean and responsive user interface.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript for better code quality and readability.
- **Chakra UI**: A modular and accessible component library for React applications.
- **Axios**: Promise-based HTTP client for making requests.
- **Socket.IO**: Real-time application framework for web sockets.

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:simopoza/weather.git
   cd weather

Install dependencies Navigate to both the backend and frontend directories to install their dependencies.

- Backend


      cd backend
      
      
      npm install


- Frontend
      
      cd frontend
      
      
      npm install

- Run the Application To run the backend server, execute:

   npm run start:dev

- To run the frontend application, navigate to the frontend directory and execute:

   npm run start
