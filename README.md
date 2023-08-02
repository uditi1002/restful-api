# Express.js RESTful API

This is a simple RESTful API built with Express.js and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on articles with their title and content.

## Prerequisites

Before running the API, make sure you have the following installed:

1. Node.js and npm (Node Package Manager)
2. MongoDB (Make sure MongoDB is running on your machine or you have a remote MongoDB URL)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory using the terminal or command prompt.
3. Install the required dependencies by running the following command:

      ```npm install```

4. Create a file named `secrets.env` in the project root directory and add your MongoDB URL in the following format:

    ```URL=YOUR_MONGODB_URL```

   
## Usage

1. Start the API by running the following command:

    ```node app.js```


2. The server will start running on `http://localhost:3000`.

## API Endpoints

### Fetch All Articles

- Method: GET
- Endpoint: /articles

Returns all articles stored in the database as a JSON array.

### Add a New Article

- Method: POST
- Endpoint: /articles

Add a new article to the database with the provided `title` and `content` in the request body.

### Delete All Articles

- Method: DELETE
- Endpoint: /articles

Deletes all articles from the database.

### Fetch a Specific Article

- Method: GET
- Endpoint: /articles/:articleID

Returns a specific article with the given `articleID` as a JSON object.

### Update a Specific Article (Full Update)

- Method: PUT
- Endpoint: /articles/:articleID

Updates a specific article with the given `articleID` with the new `title` and `content` provided in the request body.

### Update a Specific Article (Partial Update)

- Method: PATCH
- Endpoint: /articles/:articleID

Partially updates a specific article with the given `articleID` using the fields provided in the request body.

### Delete a Specific Article

- Method: DELETE
- Endpoint: /articles/:articleID

Deletes the article with the given `articleID` from the database.

