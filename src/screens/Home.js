import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Linking } from "react-native";
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

function Home({ navigation }) {

  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 20 }}>
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{textAlign: 'center'}}>Components Made With Rapi Ui</Text>
            <Button text="Rapi Docs" status="info"  style={{marginTop: 10}} onPress={() => {
              Linking.openURL("https://rapi-ui.kikiding.space/docs/")
            }}/>
            <Button text="Go To Second Screen" onPress={() => {
              navigation.navigate("SecondScreen")
            }} style={{marginTop: 10, marginBottom: 10}} status="success"  />
            <Button text={isDarkmode ? "Light Mode" : "Dark Mode"} status={isDarkmode ? "success" : "danger"} onPress={() => {
              setTheme(isDarkmode ? "light" : "dark")
            }}  />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
export default Home;
