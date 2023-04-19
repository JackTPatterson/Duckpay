import {StyleSheet, Text, View, Easing, AppLoading} from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Svg, {Path} from "react-native-svg";
import {useFonts} from "expo-font";




export function Shops() {
    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if(!fontLoaded){
        return <AppLoading/>
    }
    else
    return (
            <View>
                <SafeAreaView style={styles.body}>
                    <View>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>Shops</Text>
                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, marginTop: 10}}>
                            Find places in Hoboken that accept DuckBills or Dining Dollars
                        </Text>
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
                                <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M3.00977 11.2202V15.7102C3.00977 20.2002 4.80977 22.0002 9.29977 22.0002H14.6898C19.1798 22.0002 20.9798 20.2002 20.9798 15.7102V11.2202" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M18.3098 12C20.3298 12 21.8098 10.36 21.6098 8.35L21.3298 5.6C20.9698 3 19.9698 2 17.3498 2H14.2998L14.9998 9.01C15.1698 10.66 16.6598 12 18.3098 12Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M5.63988 12C7.28988 12 8.77988 10.66 8.93988 9.01L9.15988 6.8L9.63988 2H6.58988C3.96988 2 2.96988 3 2.60988 5.6L2.33988 8.35C2.13988 10.36 3.61988 12 5.63988 12Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>

                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Bagels On The Hudson</Text>
                                <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>Accepts DuckBills</Text>
                            </View>
                        </View>

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
                                <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M3.00977 11.2202V15.7102C3.00977 20.2002 4.80977 22.0002 9.29977 22.0002H14.6898C19.1798 22.0002 20.9798 20.2002 20.9798 15.7102V11.2202" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M18.3098 12C20.3298 12 21.8098 10.36 21.6098 8.35L21.3298 5.6C20.9698 3 19.9698 2 17.3498 2H14.2998L14.9998 9.01C15.1698 10.66 16.6598 12 18.3098 12Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M5.63988 12C7.28988 12 8.77988 10.66 8.93988 9.01L9.15988 6.8L9.63988 2H6.58988C3.96988 2 2.96988 3 2.60988 5.6L2.33988 8.35C2.13988 10.36 3.61988 12 5.63988 12Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    <Path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                </Svg>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>OBagels</Text>
                                <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>Accepts Dining Dollars</Text>
                            </View>
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
        //borderColor: primaryColor,
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

