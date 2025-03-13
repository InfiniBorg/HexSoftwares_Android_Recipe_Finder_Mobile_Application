import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecipeCard from "../components/RecipeCard";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const FavouritesScreen: React.FC = () => {
  const [favourites, setFavourites] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const savedRecipes = await AsyncStorage.getItem("favourites");
      if (savedRecipes) setFavourites(JSON.parse(savedRecipes));
    };
    fetchFavourites();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite Recipes</Text>
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => <RecipeCard recipe={item} navigation={undefined} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default FavouritesScreen;
