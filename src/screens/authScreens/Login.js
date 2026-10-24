import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://placehold.co/300x200/png",
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  container: {
    width: 300,
  },
  image: {
    width: 300,
    height: 200,
  },

});
