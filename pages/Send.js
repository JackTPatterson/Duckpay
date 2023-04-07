import {AppLoading, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import * as React from "react";
import { SafeAreaView } from "react-navigation";
import {useFonts} from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import {UserBox} from "../components/UserBox";
import Svg, {Path} from "react-native-svg";

export const SendComp = ({navigation}) => {

    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if (!fontLoaded)
        return <AppLoading/>
    else
        return (
            <View>
                <SafeAreaView style={styles.body}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 20,
                        }}>
                        <TouchableOpacity onPress={()=>{
                            navigation.pop();
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        }}>
                            <Ionicons name={"chevron-back-outline"} size={30}/>
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>Send</Text>
                        <Ionicons style={{color: 'white'}} name={"arrow-back-outline"} size={36}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#aaacae', borderRadius: 15, paddingHorizontal: 10, paddingVertical: 16}}>

                        <Svg style={{marginRight: 10}} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M22 22L20 20" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                        <View>
                            <TextInput placeholder="Search Student" style={{fontSize: 15, fontFamily: 'Sora-Regular', width: '100%'}}/>
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        borderRadius: 14,
                        marginTop: 20
                    }}>

                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'Sora-Regular',
                        }}>Friends</Text><View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>

                        <UserBox navigate={navigation} name={"Samuel Longley"}/>
                        <UserBox navigate={navigation} name={"Samuel Longley"}/>
                        <UserBox navigate={navigation} name={"Samuel Longley"}/>
                        <UserBox navigate={navigation} name={"Samuel Longley"}/>

                    </View>

                    </View>



                </SafeAreaView>

            </View>

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
