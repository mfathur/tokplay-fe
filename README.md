# **Tokopedia Play Clone - Frontend**

Developed by GG3FSGP0426_Muhammad Fathurrohman

This is a clone of the Tokopedia Play app for Generasi Gigih 3.0 final project. This repo consists of a react application built with `create-react-app`.

## Prerequisite

- Node version `>=14.20.0`
- Back-end app. You can clone the repo through this [link](https://github.com/mfathur/tokplay-be) and run it locally.

## Features

- Home Page  
  The user can see a list of videos, search videos by its title, and login to the app / logout from the app.

- Video Detail Page  
  The user can watch the video, see others comments, write a comment to the video, and see the products related to the video.

- Register Page  
  The user can register to the app.
- Login Page  
  The user can login to the app.

NOTE: Authentication is only used when writing a comment.

## How to run locally

1. Ensure the back-end app is already running.
2. Create `.env` file in root directory and copy the snippet below.

```
REACT_APP_AXIOS_BASE_URL=http://localhost:8080
```

3. Run `npm install`.
4. Run `npm start`.
5. The app has started, open your browser and visit `http://localhost:5000`.
