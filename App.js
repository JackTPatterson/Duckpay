import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Animated, SafeAreaView, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import * as Haptics from "expo-haptics";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TailwindProvider } from "tailwindcss-react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "./pages/home";
import { Shops } from "./pages/Shops";
import { Notifications } from "./pages/notifications";
import { Profile } from "./pages/profile";
import { Keypad } from "./pages/keypad";
import Svg, {Path} from "react-native-svg";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import {Setup} from "./pages/Setup";
import {GetID} from "./pages/GetID";
import {Scanner} from "./pages/Scanner";
import {SendComp} from "./pages/Send";
import {Request} from "./pages/Request";
import {TransactionDetail} from "./pages/TransactionDetail";
import {Message} from "./pages/Message";
import {Search} from "./pages/Search";
import Toast from "react-native-toast-message";
import {toastConfig} from "./Scripts/toast";
import {SignIn} from "./pages/signin";
import {createStackNavigator} from "@react-navigation/stack";
import {Pin} from "./pages/Pin";


const Tab = createBottomTabNavigator();

export default function App() {

  const Stack = createStackNavigator();


  return (

  <NavigationContainer >

    <Stack.Navigator
        lazy={true}
        optimizationsEnabled={true}
        screenOptions={{
          headerShown: false,
          useNativeDriver: false,
        }}
        initialRouteName="SignIn">
      <Stack.Screen name="SignIn" options={{ gestureEnabled: false }} component={SignIn}/>
      <Stack.Screen name="App" options={{ gestureEnabled: false }} component={AppTabHandler}/>



    </Stack.Navigator>

    <Toast config={toastConfig}/>

  </NavigationContainer>
  )


 



}


function AppTabHandler(){

  return (
      <NavigationContainer independent={true}>
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

                // You can return any component that you like here!
                if (route.name === "Home"){
                  return (

                      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z" stroke={color} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M12 17.99V14.99" stroke={color} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                      </Svg>

                  );
                }
                if(route.name === "Profile"){
                  return (

                      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z" stroke={color} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                        <Path d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z" stroke={color} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                      </Svg>

                  )
                }
                if(route.name === "Notifications"){
                  return (

                      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M6.0901 13.28H9.1801V20.48C9.1801 22.16 10.0901 22.5 11.2001 21.24L18.7701 12.64C19.7001 11.59 19.3101 10.72 17.9001 10.72H14.8101V3.52002C14.8101 1.84002 13.9001 1.50002 12.7901 2.76002L5.2201 11.36C4.3001 12.42 4.6901 13.28 6.0901 13.28Z" stroke={color} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </Svg>

                  )
                }
                if(route.name === "Business"){
                  return (

                      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke={color} strokeWidth={2}/>
                        <Path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke={color} strokeWidth={2}/>
                      </Svg>

                  )
                }
              },
              tabBarActiveTintColor: "black",
              tabBarInactiveTintColor: "#aaacae",
            })}

        >
          <Tab.Screen name="Home" component={Home}
          />
          <Tab.Screen name="Business" component={Shops} />
          <Tab.Screen name="Notifications"  component={Notifications} />

          <Tab.Screen name="Profile" component={Profile} />



        </Tab.Navigator>
      </NavigationContainer>
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

