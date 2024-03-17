### MVC Dependency Injection Example
This is a simple example of a server using the MVC (Model-View-Controller) pattern and dependency injection. The server provides endpoints for searching and finding movies using two different models: one for accessing a local dataset and another for fetching data from an external API (IMDb).

**Installation**

To run this server, make sure you have Node.js installed on your machine. Then, clone this repository and navigate to its directory in your terminal.

```bash
git clone https://github.com/Benjamin-mne/mvc-dependency-injection.git
cd mvc-dependency-injection
```

Install the dependencies using npm:
```bash
npm install
```

**Configuration**

Before running the server, ensure you have set up your environment variables. Check `.env` file.


**Running the Server**

You can start the server in two different modes: local or IMDb.

To start the server using the local dataset:
```bash
npm run start:local
```
To start the server using the IMDb API:
```bash
npm run start:imdb
```

The server will start running on the specified port, and you can access the endpoints to search for movies or find movies by ID.

**Endpoints**

- `GET /movies/search/:query` Search for movies based on the provided query string.

- `GET /movies/:id` Find a movie by its ID.

**Development Dependencies**
- nodemon: Tool that helps develop Node.js based applications by automatically restarting the Node application when file changes in the directory are detected.
- standard: JavaScript Standard Style — a linter for JavaScript.

**Contributing**

Contributions are welcome! Feel free to open an issue or submit a pull request.