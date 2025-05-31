import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const CLOUD_NAME = "dw4e20iav";
  const UPLOAD_PRESET = "matheusaula08";
  const BACKEND_URL = "http://192.168.1.12:3001"; // meu ip privado 

  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loadingImages, setLoadingImages] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão necessária", "Precisamos da sua permissão para acessar a galeria.");
      } else {
        loadImages();
      }
    })();
  }, []);

const pickImage = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const photo = result.assets[0]; 
      console.log("Imagem selecionada:", photo);
      await uploadToCloudinary(photo);
    } else {
      console.log("Seleção de imagem cancelada.");
    }
  } catch (error) {
    console.error("Erro ao selecionar imagem:", error);
    Alert.alert("Erro", "Falha ao abrir a galeria.");
  }
};

  const uploadToCloudinary = async (photo) => {
    setUploading(true);

    const data = new FormData();
    data.append("file", {
      uri: photo.uri,
      type: "image/jpeg",
      name: "upload.jpg",
    });
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("tags", "matheusaula08");

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      console.log("Resultado do upload:", result);

      if (result.secure_url) {
        setImages((prev) => [result, ...prev]);
      } else {
        Alert.alert("Erro no upload", "Não foi possível obter o link da imagem.");
      }
    } catch (error) {
      console.error("Erro no upload:", error);
      Alert.alert("Erro no upload", error.message || "Erro desconhecido");
    } finally {
      setUploading(false);
    }
  };

  const loadImages = async () => {
    setLoadingImages(true);
    try {
      const res = await fetch(`${BACKEND_URL}/images`);
      const data = await res.json();
      setImages(data);
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar imagens");
    } finally {
      setLoadingImages(false);
    }
  };

  const deleteImage = (public_id) => {
    Alert.alert("Deletar imagem", "Deseja realmente remover esta imagem?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: async () => {
          try {
            const res = await fetch(`${BACKEND_URL}/delete-image`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ public_id }),
            });
            const json = await res.json();

            if (json.result === "ok") {
              setImages((prev) => prev.filter((img) => img.public_id !== public_id));
              Alert.alert("Sucesso", "Imagem deletada");
            } else {
              Alert.alert("Erro", "Falha ao deletar imagem");
            }
          } catch (error) {
            Alert.alert("Erro", error.message);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.secure_url }} style={styles.image} />
      <TouchableOpacity onPress={() => deleteImage(item.public_id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Selecionar imagem" onPress={pickImage} />
      {uploading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 10 }} />}
      {loadingImages ? (
        <ActivityIndicator size="large" color="green" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={images}
          keyExtractor={(item) => item.public_id}
          renderItem={renderItem}
          contentContainerStyle={{ marginTop: 20 }}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  imageContainer: { flexDirection: "row", alignItems: "center", marginBottom: 15, gap: 10 },
  image: { width: 120, height: 120, borderRadius: 8 },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  deleteText: { color: "#fff", fontWeight: "bold" },
});
