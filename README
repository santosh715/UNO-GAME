# Uno Cards Game 

This repository contains the backend server for a multiplayer Uno card game built using Node.js, Express, and MongoDB.

## Installation Instructions

### Prerequisites

Before starting, ensure you have the following installed on your machine:

- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/). Node.js version 12.x or higher is recommended.
- **MongoDB**: Install MongoDB locally or use MongoDB Atlas for cloud-based MongoDB. Ensure you have a MongoDB URI ready for connection.

#### Steps to Install

1. **Clone the Repository**

   ```bash
   git clone https://github.com/josejoy2216/UNO-game.git
   cd <project-folder>
   ```

   Replace `<repository-url>` with the actual URL of your repository.

2. **Install Dependencies**

   Navigate to your project directory and install required dependencies using npm:

   ```bash
   npm install express body-parser cors mongoose path
   ```

   This command installs the necessary packages for the backend server.

3. **Configure MongoDB Connection**

   Open `index.js` and locate the `uri` variable in the MongoDB connection setup:

   ```javascript
   const uri = "mongodb+srv://your_username:your_password@your_cluster_url/your_database_name?retryWrites=true&w=majority";
   ```

   Replace `"mongodb+srv://your_username:your_password@your_cluster_url/your_database_name?retryWrites=true&w=majority"` with your actual MongoDB URI.

4. **Start the Server**

   Start the backend server by running:

   ```bash
   node index.js
   ```

   The server will start on port 5000 by default. You can configure the port using the `PORT` environment variable.

5. **Integration with Frontend**

   - Ensure your frontend application is configured to make HTTP requests to `http://localhost:5000` (or your specified port) where your backend server is running.
   - Place your frontend files (e.g., HTML, CSS, JS) in a directory named `frontend` within your project folder if serving static files from Express.

### API Endpoints

- **POST `/api/games/create`**: Create a new Uno game room.
- **POST `/api/games/join`**: Join a Uno game room using a unique code.
- **POST `/api/games/:id/start`**: Start the Uno game in a specific room.
- **POST `/api/games/:id/play`**: Play a card in the Uno game.
- **POST `/api/games/:id/draw`**: Draw a card from the deck in the Uno game.

### Contributing

Contributions are welcome! Please fork the repository, create a new branch, make your changes, and submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides clear installation instructions, outlines the API endpoints, and includes information on contributing to the project. Customize it further based on specific configurations, additional features, or any other details relevant to your Uno card game project.