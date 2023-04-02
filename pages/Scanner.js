import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "react-native-vector-icons/Ionicons";
import {Keypad} from "./keypad";
import {createStackNavigator} from '@react-navigation/stack';
import * as Haptics from "expo-haptics";






  export const Scanner = ({navigation}) => {

    const Stack = createStackNavigator();

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
      (async () => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
      setScanned(true);
      navigation.push('Keypad', {data: "Aidan Nestor"})
    };

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }


    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={
            () => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              navigation.navigate('Home')

            }
          } style={{
            position: 'absolute',
            flexDirection: 'row',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            width: 40,
            backgroundColor: 'white',
            zIndex: 100,
            left: 20,
            top: 70
          }}>
            <Ionicons name={"chevron-back-outline"} size={20}/>
          </TouchableOpacity>
          <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}
        </View>
    )

  }

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContent: {
    marginTop: 5,
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#800000',
    fontWeight: '600',
  },
  titlename: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 250,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#00CED1',
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  buttonContainer: {
    marginTop: 5,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    marginBottom: 5,
    width: 350,
    borderRadius: 15,
    borderColor: '#355af9',
    borderWidth: 1,


  },
  description: {
    fontSize: 20,
    color: '#000000',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Sora-SemiBold',
    color: '#355af9',
    marginRight: 150,
  },
  buttonIcon: {
    padding: 15,
  },
})

