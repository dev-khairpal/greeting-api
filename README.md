# Express Backend - Greeting API

This is a simple Node.js and Express-based backend that provides a greeting API.

##  Features
- Handles **CORS** for frontend communication.
- Uses **dotenv** for environment variables.
- REST API endpoint to return a greeting message.

##  Getting Started

###  Clone the Repository
```sh
git clone https://github.com/dev-khairpal/greeting-api
cd your-backend-repo
```

### Install Dependencies

```sh
npm install
```

### Set Up Environment Variables
```sh
PORT=5000
```
### Start the Server
```sh
npm start or node index.js
```

##  API Endpoint

| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| GET    | `/api/greet?name=YourName` | Returns a greeting message |
