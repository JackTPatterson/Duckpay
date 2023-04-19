import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView, Dimensions
} from "react-native";
import {
    useFonts,
} from "expo-font";
import * as React from "react";
import primaryColor from "../Constants";
import LottieView from "lottie-react-native";
import {useEffect, useRef, useState} from "react";


export const Setup = ({navigation, route}) => {

    //    iosClientId: '973544241416-m8aircu0lkutjn2l4ae6n2fiu29dvnag.apps.googleusercontent.com',
    //    androidClientId: "973544241416-5seeriv5sdbrdcr3dhccfdepitl2scmj.apps.googleusercontent.com",
    //    webID: "973544241416-qhgh03a20gbu19pir0r9ijr9rutt79p8.apps.googleusercontent.com"


    const animation = useRef(null);

    useEffect(()=>{
        animation.current?.play()
    })


    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if(!fontLoaded){
            return <></>
        }
        return(
            <SafeAreaView>
                <View style={{marginTop: 30, marginHorizontal: 15, flexDirection: "column", justifyContent: "space-between", height: '100%'}}>
                    <View>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>Lets Get Started</Text>
                    </View>
                    <Text></Text>

                    <LottieView
                        ref={animation}
                        style={{
                            width: Dimensions.get("window").width - 100,
                            height: Dimensions.get("window").width - 100,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                        speed={.9}
                        loop={true}
                        source={require('../assets/login.json')}
                    />

                    <TouchableOpacity onPress={() => {
                        navigation.push("Pin");
                    }} style={{
                        width: '100%',
                        marginBottom: 100,
                        borderWidth: 1,
                        borderColor: primaryColor,
                        backgroundColor: primaryColor,
                        padding: 15,
                        borderRadius: '100%',
                        marginTop: 10
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontFamily: 'Sora-Regular',
                            fontSize: 20,
                            color: 'white'
                        }}>Sign In</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        )

}