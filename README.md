# NPR News Scraper

A web application that scrapes news articles from NPR's website, saves them to a MongoDB database, and provides an interface for users to view and comment on articles.

## Description

This application uses Cheerio to scrape NPR's homepage for news articles, storing the title, link, and summary of each article in a MongoDB database. Users can view the scraped articles, click to read the full text on NPR's website, and leave comments on any article.

## Features

- Scrapes NPR's homepage for latest news articles
- Saves article information (title, link, summary) to MongoDB
- Displays all scraped articles on the homepage
- Allows users to click through to read the full article on NPR's website
- Enables users to view and add comments on specific articles
- Implements a responsive design with Bootstrap

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ORM
- **Frontend**: Handlebars.js templates, Bootstrap CSS
- **Web Scraping**: Cheerio, Request

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yocodigo/News-Scraper.git
   ```

2. Navigate to the project directory:
   ```
   cd News-Scraper
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Ensure MongoDB is installed and running on your system

5. Start the application:
   ```
   node server.js
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

- **View Articles**: The homepage displays all previously scraped articles
- **Scrape New Articles**: Click "Scrape New Articles" in the navigation bar to fetch fresh content
- **Read Full Article**: Click on an article title or summary to read the full article on NPR's website
- **Add Comments**: Click the "Comment" button on an article to view and add comments

## Project Structure

```
News-Scraper/
├── controller/
│   └── routes.js         # Express routes for application
├── models/
│   ├── articles.js       # Article schema and model
│   └── comments.js       # Comments schema and model
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css # Custom styles
│   │   └── js/
│   │       └── app.js    # Client-side JavaScript
├── views/
│   ├── layouts/
│   │   └── main.handlebars # Main layout template
│   ├── comments.handlebars # Comment view template
│   └── index.handlebars    # Home page template
├── package.json          # Project dependencies
└── server.js             # Express server configuration
```

## Dependencies

- express: Web server framework
- mongoose: MongoDB object modeling
- cheerio: Web scraping and HTML parsing
- request: HTTP request client
- express-handlebars: Handlebars view engine for Express
- body-parser: Request body parsing middleware

## Future Enhancements

- User authentication to allow personalized article saving
- Improved error handling
- Duplicate article prevention when scraping
- Expanded article categorization
- Search functionality for finding specific articles

## License

ISC

## Author

[yocodigo](https://github.com/yocodigo)

## Issues

Please report any issues at [https://github.com/yocodigo/News-Scraper/issues](https://github.com/yocodigo/News-Scraper/issues)
