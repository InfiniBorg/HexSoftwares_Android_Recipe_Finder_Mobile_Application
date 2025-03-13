import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites';

export const saveFavorite = async (recipe: any) => {
  try {
    let favorites = await getFavorites();
    favorites.push(recipe);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorite:', error);
  }
};

export const getFavorites = async () => {
  try {
    const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const removeFavorite = async (id: number) => {
  try {
    let favorites = await getFavorites();
    favorites = favorites.filter((recipe: any) => recipe.idMeal !== id);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};
