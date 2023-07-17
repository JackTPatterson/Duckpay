import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {BaseToast} from "react-native-toast-message";
import * as Haptics from "expo-haptics";
import Ionicons from "react-native-vector-icons/Ionicons";
import {selectionAsync} from "expo-haptics";
import primaryColor from "../Constants";

export const toastConfig = {

    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400'
            }}
        />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component

    /*
      Or create a completely new type - `successToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    successToast: ({ text1, props }) => (
        <View style={{width: '95%', borderRadius: 10, padding: 10, paddingHorizontal: 10, paddingVertical: 20, backgroundColor: '#6FD3B1', alignItems: 'center', shadowRadius: 20, shadowOffset: {width: 0, height: 10}, shadowColor: "black", shadowOpacity: .2, marginTop: 20, flexDirection: "row", justifyContent: 'flex-start'}}>
            <View  style={{
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                zIndex: 100,
                padding: 10
            }}>
                <Ionicons name={"checkmark-outline"} color={'#6FD3B1'} size={20}/>

            </View>

            <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center', color: 'white', marginLeft: 20}}>{text1}</Text>

        </View>
    ),

    failToast: ({ text1, props }) => (
        <View style={{width: '95%', borderRadius: 10, padding: 10, paddingHorizontal: 10, paddingVertical: 20, backgroundColor: primaryColor, alignItems: 'center', shadowRadius: 20, shadowOffset: {width: 0, height: 10}, shadowColor: "black", shadowOpacity: .2, marginTop: 20, flexDirection: "row", justifyContent: 'flex-start'}}>
            <View  style={{
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                zIndex: 100,
                padding: 10
            }}>
                <Ionicons name={"close-outline"} color={primaryColor} size={20}/>

            </View>

            <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center', color: 'white', marginLeft: 20}}>{text1}</Text>

        </View>
    )
};
