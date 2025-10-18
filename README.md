# Dynamic Profile Endpoint

This project implements a RESTful API endpoint `/me` that returns profile information along with a **dynamic cat fact** fetched from the [Cat Facts API](https://catfact.ninja/fact).  
It demonstrates API integration, asynchronous requests, structured JSON responses, and simple error handling.

---

##  Tech Stack
- Node.js
- Express.js
- Axios (for API requests)
- pnpm (package manager)
- Nodemon (for development)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/node-profile-api.git
cd node-profile-api
```

### 2. Install dependencies

Using pnpm (recommended):
```
pnpm install
```

Using npm:
```
npm install
```

### 3. Environment Variables

Create a .env file in the root directory:
```
PORT=3000
```

### 4. Running the Server Locally

To start the server in development mode with nodemon:
```
pnpm run dev
```
Or to start normally:
```
pnpm start
```

Server runs at:
```
http://localhost:3000/me
```

### 5. API Endpoint

GET /me

#### Success Response
```
{
  "status": "success",
  "user": {
    "email": "example@gmail.com",
    "name": "Jane Doe",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}

```
#### Error Response
```
{
  "status": "error",
  "message": "Failed to fetch cat fact",
  "error": "Request timeout"
}
```

### 6. Testing

You can test the endpoint using:

- Browser: http://localhost:3000/me

- Postman

- Curl:

### Author

Name: Aghaulor Gift  
Email: [Aghaulor Gift](aghaulor.gift@gmail.com)  
Stack: Node.js / Express.js

