import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, ImageBackground, TouchableOpacity, View, Easing} from "react-native";

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
            <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>Activity</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Sora-SemiBold'}}>Cammie Boas</Text>
              <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>April 1
                </Text>
            </View>
          </View>
          <Text style={{color: 'red'}}>-$2.00</Text>


        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Sora-SemiBold'}}>Samuel Longley</Text>
              <Text style={{color: '#aaacae'}}>March 30</Text>
            </View>
          </View>
          <Text style={{color: 'green'}}>+$13.00</Text>


        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Sora-SemiBold'}}>Alicia David</Text>
              <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>March
                15</Text>
            </View>
          </View>
          <Text style={{color: 'red'}}>+$12.00</Text>


        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Sora-SemiBold'}}>Danyal Thomson
              </Text>
              <Text style={{color: '#aaacae'}}>March 11</Text>
            </View>
          </View>
          <Text style={{color: 'green'}}>-$4.00</Text>


        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Sora-SemiBold'}}>Eddie Haley
              </Text>
              <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>March
                10</Text>
            </View>
          </View>
          <Text style={{color: 'red'}}>-$1.50</Text>


        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Sora-SemiBold'}}>Jade Farley
              </Text>
              <Text style={{color: '#aaacae'}}>Feb 20</Text>
            </View>
          </View>
          <Text style={{color: 'green'}}>+$8.35</Text>


        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Sora-SemiBold'}}>Malik Cohen
              </Text>
              <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>Feb
                10</Text>
            </View>
          </View>
          <Text style={{color: 'red'}}>-$6.00</Text>


        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{
              height: 50,
              width: 50,
              backgroundColor: 'white',
              borderRadius: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Sora-SemiBold'}}>Virginia Maddox
              </Text>
              <Text style={{color: '#aaacae'}}>Jan 3</Text>
            </View>
          </View>
          <Text style={{color: 'green'}}>+$32.70</Text>


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
    paddingLeft: 15,
    paddingRight: 15,
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
  },
  card: {
    //marginTop: 5,
    height: 16,
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

