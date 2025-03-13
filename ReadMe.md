📱 Recipe Finder App
Welcome to the Recipe Finder App, a modern and beautifully designed React Native application that allows users to search for recipes, view details, and save their favorite dishes. The app fetches recipes using the Spoonacular API and provides an engaging, user-friendly experience with a clean UI.

📌 Features
✅ Search Recipes - Find delicious recipes by entering ingredients or dish names.
✅ View Recipe Details - See the recipe name, image, and other details.
✅ Save Favorites - Mark your favorite recipes for easy access later.
✅ Professional UI - A well-styled, eye-catching interface that enhances user experience.
✅ Responsive & Fast - Optimized for smooth performance on Android devices.

🛠️ Tech Stack
React Native (using React Native CLI)
TypeScript (.tsx)
Spoonacular API (for fetching recipes)
AsyncStorage (for saving favorite recipes locally)
React Navigation (for screen navigation)
Axios (for API requests)
React Native Elements (for UI components)

🚀 Getting Started
Follow these steps to set up the app on your local machine:

1️⃣ Prerequisites
Make sure you have the following installed:

Node.js (v16+ recommended)
React Native CLI
Android Studio (for running the Android emulator)
VS Code (or any preferred code editor)

2️⃣ Clone the Repository
git clone https://github.com/InfiniBorg/HexSoftwares_Android_Recipe_Finder_Mobile_Application.git
cd Android_Recipe_Finder_Mobile_Application

3️⃣ Install Dependencies
npm install

4️⃣ Set Up the Spoonacular API
Create an account on Spoonacular
Get your API key from the API Dashboard
Create a .env file in the project root and add:
env
SPOONACULAR_API_KEY=your_api_key_here
Restart the app after adding the key.

5️⃣ Run the App
To start the development server and launch the app:
npx react-native run-android

📂 Project Structure
recipe-finder-app/
│── src/
│   ├── components/          # Reusable UI components (Header, Footer, SearchBar, etc.)
│   ├── screens/             # App screens (HomeScreen, FavoritesScreen)
│   ├── services/            # API requests and local storage logic
│   ├── assets/              # Images and icons
│   ├── App.tsx              # Main entry point
│── package.json
│── .env                     # Environment variables (API key)
│── README.md

📜 API Integration (Spoonacular API)
The app fetches recipes from Spoonacular API using axios. The request structure looks like this:
import axios from 'axios';

const API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const getRecipes = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}&apiKey=${API_KEY}`);
    return response.data.results;  // Returns array of recipes
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};


🎯 Future Improvements
🚀 Ingredient-Based Search – Find recipes based on available ingredients.
🚀 Advanced Filtering – Filter recipes by cuisine, diet, or cooking time.
🚀 Step-by-Step Instructions – Detailed recipe steps for better guidance.


🔥 Troubleshooting
App not fetching recipes?
Ensure your Spoonacular API key is correct in .env.
Check your internet connection.
Restart the app after changing the API key.
Metro bundler issue?
Try restarting with:
npx react-native start --reset-cache

📄 License
This project is open-source and licensed under the MIT License.

💡 Made with ❤️ by Kamogelo Terrence Mahlangu (mahlangukamogelo206@gmail.com)