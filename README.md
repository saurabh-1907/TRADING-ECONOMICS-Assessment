# Mexico Trade Dashboard

![Screenshot 2025-03-30 153126](https://github.com/user-attachments/assets/7b936db3-6c13-4e91-9a16-6b5542715484)

![Screenshot 2025-03-30 153216](https://github.com/user-attachments/assets/8313c1b5-9283-467b-8d2d-fe2a50bddb53)

This project is a React-based web application that visualizes Mexico's trade data using the Trading Economics API. It fetches and displays trade-related statistics in a line chart and tabular format.

## Features
- Fetches real-time trade data from the Trading Economics API.
- Displays the data using a Recharts line chart.
- Provides a table for detailed data visualization.

## Prerequisites
Ensure you have the following installed before running the project:
- Node.js (https://nodejs.org/)
- npm (Node Package Manager, included with Node.js)

## Installation and Setup

1. **Clone the Repository**
   ```sh
   https://github.com/saurabh-1907/TRADING-ECONOMICS-Assessment
   cd mexico-trade-dashboard
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up API Key**
   - Rename `.env.example` to `.env`:
     ```sh
     mv .env.example .env
     ```
   - Open `.env` and add your Trading Economics API key:
     ```sh
     REACT_APP_TE_API_KEY=your_api_key_here
     ```

4. **Run the Application**
   ```sh
   npm start
   ```

   This will start the development server, and the application will be available at `http://localhost:3000/`.

## Usage
- The application will fetch trade data for Mexico from the Trading Economics API.
- It will display the data in a table and visualize it using a line chart.
- Click on any data title to open its source in a new tab.

## Technologies Used
- React.js
- Axios (for API requests)
- Recharts (for data visualization)
- Trading Economics API

## License
This project is licensed under the MIT License.

## Contact
For any questions or issues, please contact [Your Name] at [Your Email].

