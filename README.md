# Personal Budget Tracker

https://

## My Solution and Thought Process

### Functionality Overview

First, I broke down the core functionalities needed for the project:

- Add Expense: A function is needed to add an expense, including the amount, category, and date. This data will be stored in localStorage.
- View Expenses: We need functionality to view expenses, with the ability to filter by category and date range. The data will be retrieved from localStorage.
- Bar Chart Visualization: A bar chart will visualize total spending by category using data from localStorage.
- UI and UX: The app should look good and be responsive, using TailwindCSS for styling. It also includes input validation and error handling for issues like missing data.

### Initial Setup

- I started by setting up the project with formatting, linting, and dependencies.
- I chose Vite as the build tool and TailwindCSS for styling due to their fast setup and flexibility.

### Adding an Expense

- I used state to manage the expense data as the user adds it.
- The expense is then saved to localStorage. To ensure we're working with an array of existing expenses, I created a helper function (getExpenses) to fetch the current data from localStorage.
- I then pushed the new expense to the array and updated localStorage with the updated data.
- Input validation is added later to ensure that:
  The amount is positive.
  The category only includes letters.
  The date follows the YYYY-MM-DD format.

### Viewing Expenses

- I created a function to display all expenses, fetching the data from localStorage using my helper function and updating the UI using state.
- To allow filtering by category, I first needed to collect all unique categories. I created a helper function to return an array of categories, ensuring no duplicates.
- I then implemented the functionality to display expenses filtered by category by matching the selected category.
- Similarly, I added the functionality to filter expenses by date. Users can input a start and end date to view expenses within that range.
  - Both filters (category and date) were implemented using input forms and handled using state to update the UI.

### Chart Visualization (Using Chart.js)

- I integrated Chart.js to create a bar chart that visualizes the total spending by category.
- I installed the necessary packages and imported helper functions (getExpenses and getExpenseCategories) to retrieve the data required for the chart.
- I created a function to aggregate expense amounts and used it to generate the chart’s labels (categories) and datasets (amounts).

### Refactoring with Context

After implementing the core functionality, I refactored the code to make it more efficient and maintainable.

- I created a Context to manage the expense data, which was previously handled by individual helper functions.
- This context pulls data from localStorage and makes it available throughout the app, allowing components to access and update the expense data without needing to call multiple helper functions.
- I refactored all the components to use this context instead of directly interacting with localStorage or the helper functions. This improves the app's structure by centralizing data management and reducing redundancy.

### Input Validation and Error Handling

For the Add Expense feature, I added input validation:

- I used state to track errors and displayed error messages on input blur.
- I validated that:

  - The amount is a valid positive number.
  - The category contains only alphabetical characters.
  - The date follows the YYYY-MM-DD format using regular expressions.

- I applied similar validation to the View Expenses component for the date range filter.

### Styling the App

After implementing the basic functionality, I began styling the app with TailwindCSS to make it visually appealing and user-friendly. I started with the core components, focusing on a clean and simple design. As I continued editing to the code, I refined the styling, ensuring a nice layout, input validation feedback, and an intuitive interface. Given more time, I would further enhance the responsiveness for a more polished mobile experience.

## Steps to Run and Test the Project

### Clone this repository

Navigate to the project directory and install the required dependencies:

    cd personal-budget-tracker-BLDR
    git clone https://github.com/victoriaraya/personal-budget-tracker-BLDR.git

### Install dependencies

    npm install

### Run the development server:

    npm run dev

### Open the app in your browser

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Linting and Code Formatting

To ensure your code is properly linted and formatted, you can run the following command:

    npm run lint
    npm run format
