import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {BaseToast} from "react-native-toast-message";
import * as Haptics from "expo-haptics";
import Ionicons from "react-native-vector-icons/Ionicons";

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
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({ text1, props }) => (
        <View style={{width: '90%', borderRadius: 100, padding: 10, paddingHorizontal: 20, alignItems: 'center', shadowRadius: 20, shadowOffset: {width: 0, height: 10}, shadowColor: "black", shadowOpacity: .2, marginTop: 20,  backgroundColor: 'white', flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center'}}>{text1}</Text>
            <View  style={{
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#42ff6e',
                zIndex: 100,
                padding: 5
            }}>
                <Ionicons name={"checkmark-outline"} color={"white"} size={20}/>

            </View>
        </View>
    )
};
