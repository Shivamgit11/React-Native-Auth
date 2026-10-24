import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";
import TabBarIcon from "../components/TabBarIcon";
import TabBarText from "../components/TabBarText";
import ForgotPassword from "../screens/authScreens/ForgotPassoword";
import Login from "../screens/authScreens/Login";
import Register from "../screens/authScreens/Register";
import Loading from "../screens/utils/Loading";
import { getApps, initializeApp } from "firebase/app";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useTheme, themeColor } from "react-native-rapi-ui";

const Navigator = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDimtYHeLzws775dJzzu7yagDi2r3q3jqo",
  authDomain: "react-native-8975a.firebaseapp.com",
  projectId: "react-native-8975a",
  storageBucket: "react-native-8975a.firebasestorage.app",
  messagingSenderId: "202515057969",
  appId: "1:202515057969:web:8f80b64c7a2d347d7b3410",
  measurementId: "G-WDVFWMTH80",
};

if (getApps?.length === 0) {
  initializeApp(firebaseConfig);
}

const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "white",
          backgroundColor: isDarkmode ? themeColor.dark100 : "white",
        },
      }}
      style={{ marginBottom: 10 }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title={"Home"} />,
          tabBarIcon: ({ color }) => <TabBarIcon icon="home" color={color} />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title={"Profile"} />,
          tabBarIcon: ({ color }) => <TabBarIcon icon="person" color={color} />,
        }}
      />
      <Tabs.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title={"About"} />,
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon="information-circle" color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const Main = () => {
  return (
    <Navigator.Navigator screenOptions={{ headerShown: false }}>
      <Navigator.Screen name="MainTabs" component={MainTabs} />
      <Navigator.Screen name="SecondScreen" component={SecondScreen} />
    </Navigator.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user === null && <Loading />}
      {user === false && <Auth />}
      {user === true && <Main />}
    </NavigationContainer>
  );
};

export default MainNavigator;
