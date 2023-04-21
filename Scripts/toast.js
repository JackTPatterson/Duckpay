import {Text, View} from "react-native";
import * as React from "react";
import {BaseToast} from "react-native-toast-message";

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
        <View style={{ height: 45, width: '90%', borderRadius: 100, marginTop: 20,  backgroundColor: '#f1f1f1', flexDirection: "column", justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center'}}>{text1}</Text>
        </View>
    )
};
