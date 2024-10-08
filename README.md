# Social Media Platform

A modern social media platform that allows users to share posts, interact with others, and explore trending content. Built with a focus on performance, scalability, and a seamless user experience.

## Features

- **User Authentication**: Secure user authentication using JWT (JSON Web Tokens).
- **Posts and Interactions**: Users can create, like, and comment on posts in real time.
- **User Profiles**: Personalized user profiles with the ability to update bio and profile picture.
- **Explore Trending Content**: A section to browse and interact with trending posts.
- **Real-time Notifications**: Get notified instantly when someone interacts with your posts.
- **Responsive Design**: Fully responsive UI, optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: Built using **React** and **Material UI** for a fast, modern, and responsive interface.
- **Backend**: Powered by **Node.js** and **Express** for handling API requests.
- **Database**: **MongoDB** for efficient data storage and retrieval.
- **Authentication**: Secure authentication using **JWT** (JSON Web Tokens) for user sessions.
- **File Storage**: **Cloudinary** integration for image uploads.
- **State Management**: Managed using React hooks and context API.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omkarhacker/ShoutLine.git
   cd ShoutLine

2. Install dependencies for both frontend and backend:
   
   # For frontend
      cd client
      npm install

   # For backend
      cd ../server
      npm install

3. Create a .env file in the root of the server directory and add the following:
   
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret


4. Start the development servers:
   cd client
   npm start

   cd ../server
   npm node index.js

5. 
   ![MongoDB Schema](../twitter/server/sociopedia-schema.png)

