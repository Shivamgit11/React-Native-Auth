import React from "react";
import AppNavigator from "./src/navigator/AppNavigator.js";
import { ThemeProvider } from "react-native-rapi-ui";
import { AuthProvider } from "./src/AuthContext/AuthProvider.js";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
