import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  Text,
  Button,
  TopNav,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";

const SecondScreen = ({ navigation }) => {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Explore"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white : themeColor.dark}
          />
        }
        rightAction={() => {
          setTheme(isDarkmode ? "light" : "dark");
        }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "bold" }}>
              Choose a section
            </Text>
            <Button
              style={{ marginTop: 10 }}
              text="Home"
              onPress={() => navigation.navigate("MainTabs")}
            />
            
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};

export default SecondScreen;
