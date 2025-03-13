import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";

interface RecipeDetailsScreenProps {
  route: any;
}

interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  instructions: string;
}

const API_KEY = "YOUR_SPOONACULAR_API_KEY";

const RecipeDetailsScreen: React.FC<RecipeDetailsScreenProps> = ({ route }) => {
  const { recipe } = route.params;
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`
        );
        setRecipeDetails(response.data);
      } catch (error) {
        console.error("Error fetching recipe details", error);
      }
    };
    fetchRecipeDetails();
  }, [recipe.id]);

  return (
    <ScrollView style={styles.container}>
      {recipeDetails ? (
        <>
          <Image source={{ uri: recipeDetails.image }} style={styles.image} />
          <Text style={styles.title}>{recipeDetails.title}</Text>
          <Text style={styles.instructions}>{recipeDetails.instructions}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 250, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  instructions: { fontSize: 16, marginTop: 10 },
});

export default RecipeDetailsScreen;
