import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  navigation: any;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, navigation }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Favourites", { recipe })}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", marginBottom: 10, borderRadius: 10, overflow: "hidden" },
  image: { width: "100%", height: 150 },
  title: { padding: 10, fontWeight: "bold", fontSize: 16 },
});

export default RecipeCard;
