import {AppLoading, StyleSheet, Text, View} from "react-native";

import { TailwindProvider } from "tailwindcss-react-native";



import * as Haptics from "expo-haptics";

import * as React from "react";
import { SafeAreaView } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useFonts} from "expo-font";
import {TransactionList} from "../components/TransactionList";




export function Notifications() {

  let fontLoaded = useFonts({
    "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
    "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
  });

  if(!fontLoaded){
    return <AppLoading/>
  }
  else

  return (
    <TailwindProvider>
    <View>
      <SafeAreaView style={styles.body}>
        <View>
            <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24, marginBottom: 20}}>Activity</Text>
        </View>
        <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
        <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
        <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
        <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
        <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
        <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
        <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
        <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>


      </SafeAreaView>

    </View>
    </TailwindProvider>
  );
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        height: "100%",
        paddingTop: 70,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 30,
    }
})