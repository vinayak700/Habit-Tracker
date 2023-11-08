# Habit Tracker App

The Habit Tracker App is a full-stack web application that allows users to define and track their habits. Users can add multiple habits, track their status for each habit daily, and view the status history for the past 7 days. This app is built using Node.js and EJS for the front end.

## Features

1. **Add Habits**

   - Users can add multiple habits to track, such as reading a book, going to the gym, etc.

2. **Track Habit Status**

   - Users can track the status of each habit daily, with three options:
     - Done: Mark the habit as done for a day.
     - Not Done: Mark the habit as not done for a day.
     - None: User did not take any action on a habit for a day.

3. **View Current Habits**

   - Users can view a list of their current habits.
   - An "Add Habit" button is provided to add new habits.

4. **7-Day Habit View**

   - Users can view the status of a habit for the past 7 days.
   - The view shows today's date and allows the user to mark today's habit status.
   - The status of the habit for the previous 6 days is displayed.

5. **Toggle Habit Status**

   - Users can change the status of a habit for today or any of the previous 6 days.
   - The status can be toggled between "Done," "Not Done," or "None."

6. **Optional User**

   - One default user is created, and habits are attached to that user (authentication is not required).

7. **Database Storage**

   - Data is stored in a database to persist habit and status information.

8. **Bonus Feature (Optional)**
   - The app keeps track of the user's longest streak and the number of days the user completed a habit since it was created.

## Project Structure

The project is organized with the following structure:

habit-tracker-app/
│
├── config/
│ ├── mongoose.js # Database configuration
│
├── models/
│ ├── habit.js # Habit schema definition
│ ├── user.js # user schema definition
│
├── public/
│ ├── css/ # CSS styles
│ ├── js/ # JavaScript scripts
│
├── routes/
│ ├── habits.js # Routes for managing habits
│ ├── index.js # Routes for managing user resource
│ ├── users.js # Routes for managing users
│
├── views/
│ ├── layouts/ # EJS layout templates
│ ├── \_header.ejs/ # EJS views for header
│ ├── 404.ejs/ # EJS views for 404 Message
│ ├── daily_view.ejs/ # EJS views for daily_view
│ ├── home.ejs/ # EJS views for home
│ ├── user_sign_in.ejs/ # EJS views for Sign In
│ ├── user_sign_up.ejs/ # EJS views for Sign Up
│ ├── weekly_view.ejs/ # EJS views for Weekly view
│
├── index.js # Express application configuration
│
├── package.json # Project dependencies

## Getting Started

1. Clone the repository from GitHub.
2. Install the project dependencies using `npm install`.
3. Set up your database by configuring `config/mongoose.js`.
4. Start the application using `npm start`.

## Code and Structure

- The code is organized and structured to maintain readability and maintainability. It includes comments and follows good practices for variable and function naming.

## Design and Creativity

- The app's design and user interface are designed to be user-friendly and intuitive, focusing on the core habit tracking features.

Feel free to explore the Habit Tracker App and start tracking your habits effectively!
