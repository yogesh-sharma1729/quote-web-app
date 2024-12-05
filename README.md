# Quote Generator App

## Overview
This is a simple React application that fetches and displays random quotes. Users can click a button to get a new quote along with its author.

## Technologies Used
- React
- CSS
- Fetch API

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage 
- Click the "Get New Quote" button to fetch a random quote from the Quotable API.
- The quote and its author will be displayed on the screen.

## File Structure 
  public/
└── index.html
src/
├── App.css
├── App.js
├── App.test.js
├── components/
│ ├── QuoteButton.js
│ └── QuoteCard.js
├── index.js
└── reportWebVitals.js
