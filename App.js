import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import * as Haptics from "expo-haptics";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TailwindProvider } from "tailwindcss-react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./pages/home";
import { CardInfo } from "./pages/cardInfo";
import { Notifications } from "./pages/notifications";
import { Profile } from "./pages/profile";
import { Scanner } from "./pages/Scanner";
import { Keypad } from "./pages/keypad";



const Tab = createBottomTabNavigator();

export default function App() {

  
  
 
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 1,
              shadowRadius: 1,
              shadowColor: "#d1d1d1",
              backgroundColor: "#fff",
              borderTopWidth: 0,
              height: 100,
            },
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Business") {
                iconName = focused
                  ? "pricetag-outline"
                  : "pricetag-outline";
              } 
               else if (route.name === "Home") {
                 iconName = focused ? "home-outline" : "home-outline";
               } else if (route.name === "Notifications") {
                 iconName = focused ? "notifications-outline" : "notifications-outline";
               } else if (route.name === "Profile") {
                 iconName = focused
                   ? "person-circle-outline"
                   : "person-circle-outline";
               }

              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              // You can return any component that you like here!
              if (iconName == "calendar-blank-outline"){
                return (
                <Icon
                  name={"card-outline"}
                  size={size}
                  color={color}
                />
               );
              }
              else {
                return <Icon name={iconName} size={size} color={color} />;
              }
               
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#aaacae",
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Business" component={Keypad} />
          <Tab.Screen name="Notifications" component={Notifications} />

          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    fontFamily: "Sora_400Regular",
  },
});

