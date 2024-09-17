
# Barkopedia Website

A React web application that shows a gallery of dog images, allows searching for specific dog breeds, and displays a random dog image on the homepage. The application uses the [Dog CEO API](https://dog.ceo/dog-api/) to fetch dog images and breed information.

## Features
- **Dog Gallery**: View random dog images in a gallery.
- **Breed Search**: Search for specific dog breeds and view images.
- **Random Dog Image**: The homepage displays a random dog image upon load.

## Demo
You can access the live version of the project [https://barkopedia.netlify.app/](https://barkopedia.netlify.app/).

## Tech Stack

- **React**: Frontend JavaScript framework.
- **Bootstrap**: CSS framework for responsive design.
- **React-Bootstrap**: React components built using Bootstrap.
- **FontAwesome**: Used for displaying social media icons.
- **Dog CEO API**: A public API used to fetch dog breed data and images.
- **React Router**: Handles page navigation within the app.
- **React Spinners**: Provides loading spinners during data fetching.

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your local development environment:
- Node.js (version 14 or higher)
- npm or yarn (Node package manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/UNUSkh/Test-technique-dogWebsite.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd dog-ceo-website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Project

1. **Start the development server**:
   ```bash
   npm start
   ```
   The app should now be running on `http://localhost:3000`.

2. **Building for production**:
   ```bash
   npm run build
   ```
   This command builds the app for production, outputting static assets into the `build` directory.


## Folder Structure

- **src/**: Contains the source code for the project.
  - **components/**: Reusable React components (e.g., Navbar, Footer, CustomCard).
  - **pages/**: Main application pages (e.g., Home, DogGallery, DogBreedSearch).
  - **images/**: Static assets such as images used across the app.
  - **App.js**: Main app component that defines routes.
  - **index.js**: Entry point of the application.
  - **App.css**: Custom styles for the application.


## Dependencies

The main dependencies are listed in the `package.json` file. Here's a quick overview of the most important ones:

- **React**: The main library for building user interfaces.
- **Bootstrap & React-Bootstrap**: Used for responsive design and styling.
- **React-Router-Dom**: Handles navigation and routing in the app.
- **FontAwesome**: Provides social media icons.
- **React Spinners**: Displays loading spinners during API requests.
- **Dog CEO API**: Provides dog images and breed data.


## Contact

If you have any questions, feel free to reach out:

- **Author**: Younes Ayoub Khoya
- **LinkedIn**: [https://www.linkedin.com/in/younes-ayoub-khoya/](https://www.linkedin.com/in/younes-ayoub-khoya/)
- **GitHub**: [https://github.com/UNUSkh](https://github.com/UNUSkh)
- **Personal Website**: [https://khoyayounesayoub.netlify.app/](https://khoyayounesayoub.netlify.app/)
