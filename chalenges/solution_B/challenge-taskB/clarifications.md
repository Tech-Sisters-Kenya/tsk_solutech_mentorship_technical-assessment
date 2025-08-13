# Top 3 Service Finder 🏆
A TypeScript + React project that allows users to add services, assign ratings, and dynamically reveal the top 3 services in an interactive, visually appealing interface.

## Table of Contents
- Overview

- Features

- Installation

- Usage

    * Terminal

    * Browser

- Utility Function

## Overview
This project demonstrates a service ranking system:

* Users can add services with ratings.

* Ratings can be manually set or randomly generated.

* The application identifies the top 3 services dynamically.

* Results are displayed with animations, medals, and fun stats.

It is designed with TypeScript for type safety, React for the frontend, and Tailwind CSS for styling.

## Features
- Add and remove services dynamically

- Assign ratings manually or via random generation

- Animated countdown and reveal of top 3 services

- Medal and star indicators for top services

- Fun statistics: average rating and premium services

- Responsive design for desktop and mobile

## Installation
1. clone the repository 
* git clone git@github.com:ANNGLORIOUS/tsk_solutech_mentorship_technical-assessment.git
* cd solution_B/challenge-taskB

2. Install dependancies
* npm install

## Usage
1. Running code in terminal- run npm start you will the expected code:
[
  { "name": "Food Delivery", "rating": 4.9 },
  { "name": "Child Care", "rating": 4.8 },
  { "name": "Tutoring", "rating": 4.6 }
]

2. Start the React development server:
    npm run dev

    * Open http://localhost:5173/ in your browser.
    * Add services, adjust ratings, or use random ratings
    * Click “REVEAL THE TOP 3!” to see the animated results
    * Reset services anytime with the Reset button

## Utility Function
The core logic for determining the top 3 services is encapsulated in a utility function.

1. How It Works
- Cloning the Services Array
- The function starts by creating a copy of the services array.
- This ensures that the original data is not modified during the sorting process.
- Sorting by Rating
- The cloned array is sorted in descending order based on each service's rating.
- The highest-rated services appear first in the sorted list.

2. Selecting the Top 3
- After sorting, the function extracts the first three items from the array.
- These three items represent the highest-rated services, i.e., the winners.

3. Return Value
- The function returns a new array containing the top 3 services, preserving the original order for the rest of the services.

### Key Points
- Non-destructive: The original services array is never mutated.
- Dynamic: Works with any number of services and ratings.
- Simple & Efficient: Uses native array operations for sorting and slicing.

 

