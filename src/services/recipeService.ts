import axios from 'axios';

const API_KEY = '2659ead08d8c43e4bcf7c73579f4d3c5';
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const getRecipes = async (query: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        query: query,
        number: 10,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

