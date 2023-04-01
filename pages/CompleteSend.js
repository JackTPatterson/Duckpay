import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { TailwindProvider } from "tailwindcss-react-native";


import BottomSheet from "react-native-simple-bottom-sheet";

import * as Haptics from "expo-haptics";

import * as React from "react";
import { SafeAreaView } from "react-navigation";

export function Scanner() {
const panelRef = React.useRef(null);

function handleQR() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  panelRef.current.togglePanel();
}

  return (
    <TailwindProvider>

    <View>
      <SafeAreaView style={styles.body}>
        <View
        
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={styles.title}>Scanner</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', border: 'black', borderWidth: 1, borderColor: '#d1d1d1', borderRadius: '100%', paddingHorizontal: 10, paddingVertical: 10}}>
          <MaterialCommunityIcons style={{marginRight: 10}} name="search" size={30} color="#000" />
          <View>
            <TextInput placeholder="Search Scanner" style={{fontSize: 15, fontWeight: 'medium', width: '100%'}}/>
          </View>
        </View>
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
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 600
  }
});
