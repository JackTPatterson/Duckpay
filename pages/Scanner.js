import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity, AppLoading, Dimensions, Platform} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "react-native-vector-icons/Ionicons";
import {Keypad} from "./keypad";
import * as Haptics from "expo-haptics";
import Svg, {Path} from "react-native-svg";
import { Camera, CameraType } from 'expo-camera';
import primaryColor from "../Constants";

export const Scanner = ({navigation}) => {


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const [isTorchOn, setIsTorchOn] = useState(false);

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



          <Camera style={StyleSheet.absoluteFillObject} type={CameraType.back}
                  barCodeScannerSettings={{
                  barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],


          }}
                  flashMode={isTorchOn ? Camera.Constants.FlashMode.torch : false}
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}

          >

          </Camera>
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}
          <View style={{position: 'absolute', bottom: 50, left: (Dimensions.get('window').width / 2) - 35}}>
            <TouchableOpacity onPress={ async ()=>{
              setIsTorchOn(!isTorchOn);
            }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: '100%',
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: '#fff',


                }}
            >
              <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M6.0901 13.28H9.1801V20.48C9.1801 22.16 10.0901 22.5 11.2001 21.24L18.7701 12.64C19.7001 11.59 19.3101 10.72 17.9001 10.72H14.8101V3.52002C14.8101 1.84002 13.9001 1.50002 12.7901 2.76002L5.2201 11.36C4.3001 12.42 4.6901 13.28 6.0901 13.28Z" stroke={"black"} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </Svg>
            </TouchableOpacity>
          </View>

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
    borderColor: primaryColor,
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
    color: primaryColor,
    marginRight: 150,
  },
  buttonIcon: {
    padding: 15,
  },
})

