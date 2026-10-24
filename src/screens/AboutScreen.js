import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { Layout, Section, SectionContent, Text, TopNav, useTheme, themeColor } from "react-native-rapi-ui";

const AboutScreen = () => {
  const { isDarkmode, setTheme } = useTheme();
  const textColor = isDarkmode ? themeColor.white : themeColor.dark;

  return (
    <Layout>
      <TopNav
        middleContent="About"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={textColor}
          />
        }
        rightAction={() => setTheme(isDarkmode ? "light" : "dark")}
      />
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ color: textColor, fontSize: 20 }}>
              About
            </Text>
            <Text style={{ color: textColor, lineHeight: 24, marginTop: 12 }}>
              Add a short introduction about yourself, your interests, and what
              you do.
            </Text>
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
};

export default AboutScreen;
