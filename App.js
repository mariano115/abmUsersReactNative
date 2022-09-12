import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalColors } from "./constants/colors";
import IconButton from "./components/UI/IconButton";
import AllUsers from "./screens/AllUsers";
import ManageUsers from "./screens/ManageUsers";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: GlobalColors.tecsoPrimary },
            headrTintColor: "white",
            headerRight: ({ tintColor }) => {
              return (
                <IconButton
                  icon="add"
                  color={tintColor}
                  size={30}
                  onPress={() => {
                    navigation.navigate("Manage Users", { isEditing: false });
                  }}
                />
              );
            },
          })}
        >
          <Stack.Screen
            name="Users List"
            component={AllUsers}
            options={{
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Manage Users"
            component={ManageUsers}
            options={{
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
