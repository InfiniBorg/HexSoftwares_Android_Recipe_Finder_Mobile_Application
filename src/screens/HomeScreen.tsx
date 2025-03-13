import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import axios from "axios";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

interface HomeScreenProps {
  navigation: any;
}

const API_KEY = "2659ead08d8c43e4bcf7c73579f4d3c5";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [query, setQuery] = useState<string>("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=10&apiKey=${API_KEY}`
      );
      setRecipes(response.data || []);
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Recipes by Ingredients</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredients (e.g. Chicken, Rice)"
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.button} onPress={fetchRecipes}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("RecipeDetails", { recipe: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.recipeTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: "#FF5733", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  card: { backgroundColor: "#fff", marginBottom: 10, borderRadius: 10, overflow: "hidden" },
  image: { width: "100%", height: 150 },
  recipeTitle: { padding: 10, fontWeight: "bold", fontSize: 16 },
});

export default HomeScreen;
