import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, ImageBackground, TouchableOpacity, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { TailwindProvider } from "tailwindcss-react-native";


import BottomSheet from "react-native-simple-bottom-sheet";

import * as Haptics from "expo-haptics";

import * as React from "react";
import { SafeAreaView } from "react-navigation";



import QRCode from "react-native-qrcode-svg";
import Ionicons from "react-native-vector-icons/Ionicons";




export function Notifications() {
const panelRef = React.useRef(null);

function handleQR() {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  panelRef.current.togglePanel();
}

  return (
    <TailwindProvider>
    <View>
      <SafeAreaView style={styles.body}>
        <View>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={styles.title}>Notifications</Text>

          </View>
          <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.card}>
              <ImageBackground
                  source={{ uri: 'data:image/png;base64,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' }}
                  resizeMode="cover"
                  style={styles.cardImage}>
                  <Text style={styles.text}>Inside</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

        </View>

      </SafeAreaView>
      <BottomSheet
        sliderMinHeight={-20}
        isOpen={false}
        style={{
          padding: 20,
          flexDirection: "column",
          justifyContent: "center",
        }}
        ref={(ref) => (panelRef.current = ref)}
      >
        <Text style={{ fontSize: 25, fontWeight: 600, marginBottom: 20 }}>
          Event Code
        </Text>
        <QRCode value="1" size={300} />
      </BottomSheet>
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
    fontWeight: 600,
    padding: 10,
  },
  text: {
    fontSize: 16,
    //fontWeight: 600,
    //padding: 10,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  card: {
    //marginTop: 5,
    //height: 16,
    width: 350,
    //flexDirection: 'row',
    //justifyContent: 'left',
    //alignItems: 'center',
    //marginBottom: 5,
    //flex: 1,
    //borderRadius: 15,
    //borderColor: '#355af9',
    //borderWidth: 1,
  },
  cardImage: {
    //display: 'flex',
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
});

