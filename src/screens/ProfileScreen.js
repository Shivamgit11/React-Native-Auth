import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Text, TopNav, useTheme, themeColor } from "react-native-rapi-ui";

const ProfileScreen = () => {
  const { isDarkmode, setTheme } = useTheme();
  const textColor = isDarkmode ? themeColor.white : themeColor.dark;

  return (
    <Layout>
      <TopNav
        middleContent="Profile"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={textColor}
          />
        }
        rightAction={() => setTheme(isDarkmode ? "light" : "dark")}
      />
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#ffffff" />
        </View>
        <Text fontWeight="bold" style={[styles.name, { color: textColor }]}>
          Your Name
        </Text>
        <Text style={[styles.subtitle, { color: textColor }]}>
          Your role or headline
        </Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  avatar: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 48,
    height: 96,
    justifyContent: "center",
    marginBottom: 16,
    width: 96,
  },
  name: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default ProfileScreen;
