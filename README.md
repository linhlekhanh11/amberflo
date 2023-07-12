# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## HOW TO USE THIS APP

- I implemented this app as a table, the data in table could be sorted in columns by clicking in header.
- When users click in the ADD METER button, it allows them to create a new meter and adds to the table in the landing page
- When users click in individual row, it will redirect them to the detail page. It allows them to review, edit and delete meter. If it is a default meter in API, users cannot make any changes.  

## ADDITIONAL IDEA TO MAKE THIS APP BETTER (IF I HAVE MORE TIME)
#### Add Meter Modal:
- After adding a meter, users have to close a modal manually. It would be nice if it could automatically close it after user successfully edited a meter
- Since it is a popup modal, users have to refresh the page to see the updated data after making change from edit modal. Maybe we could create a new route, redirect users to a new page for creating a new meter instead of modal to avoid this delay. 
### Delete Function: 
- It would be nice if I can impletement the confirm modal for user to confirm deleting a meter. It could improve user experience and avoid mistake from user behavior. 
### Edit Function: 
- It would be nice if an edit button is default disabled until users actually make any changes, so it will have a better user experience. 
### Adding back button:
- It would be nice if we can add a back button so user can easily do navigate to the previous page. 