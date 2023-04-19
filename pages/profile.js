
import {StyleSheet, Text, Image, TouchableOpacity, View} from "react-native";


import Ionicons from "react-native-vector-icons/Ionicons";

import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {useFonts} from "expo-font";
import primaryColor from "../Constants";


//export function Profile() {

export function Profile() {

    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if(!fontLoaded){
        return <></>
    }
    else
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View
                    style={styles.headerContent}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <View style={{
                            marginBottom: 10,
                            backgroundColor: 'white',
                            borderRadius: '100%',
                            flexDirection: 'column',
                        }}>
                            <View
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '100%',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: primaryColor,


                                }}
                            >
                                <Text style={{
                                    fontFamily: "Sora-SemiBold",
                                    fontSize: 36,
                                    color: "white",
                                }}>JP</Text>
                            </View>
                        </View>

                    </View>
                    <Text style={styles.name}>Jack Patterson</Text>
                    <Text style={styles.email}>fakeemail@gmail.com</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={styles.buttonIcon}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12.1596 10.87C12.0596 10.86 11.9396 10.86 11.8296 10.87C9.44957 10.79 7.55957 8.84 7.55957 6.44C7.55957 3.99 9.53957 2 11.9996 2C14.4496 2 16.4396 3.99 16.4396 6.44C16.4296 8.84 14.5396 10.79 12.1596 10.87Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4197 22.27 17.1697 20.43C19.5897 18.81 19.5897 16.17 17.1697 14.56C14.4297 12.73 9.91973 12.73 7.15973 14.56Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                        <Text style={styles.buttonText}>Account</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"chevron-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={styles.buttonIcon}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M2.00049 8.50488H22.0005" stroke={"black"} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M6.00049 16.5049H8.00049" stroke={"black"} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M10.5005 16.5049H14.5005" stroke={"black"} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M6.44049 3.50488H17.5505C21.1105 3.50488 22.0005 4.38488 22.0005 7.89488V16.1049C22.0005 19.6149 21.1105 20.4949 17.5605 20.4949H6.44049C2.89049 20.5049 2.00049 19.6249 2.00049 16.1149V7.89488C2.00049 4.38488 2.89049 3.50488 6.44049 3.50488Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>

                        </View>
                        <Text style={styles.buttonText}>Payment</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"chevron-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={styles.buttonIcon}>

                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M10.4902 2.23006L5.50016 4.11006C4.35016 4.54006 3.41016 5.90006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19016 17.2801 5.14016 17.9901L9.44016 21.2001C10.8502 22.2601 13.1702 22.2601 14.5802 21.2001L18.8802 17.9901C19.8302 17.2801 20.6102 15.7301 20.6102 14.5501V7.12006C20.6102 5.89006 19.6702 4.53006 18.5202 4.10006L13.5302 2.23006C12.6802 1.92006 11.3202 1.92006 10.4902 2.23006Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" stroke={"black"} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M12 12.5V15.5" stroke={"black"} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>


                        </View>
                        <Text style={styles.buttonText}>Security</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"chevron-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={styles.buttonIcon}>

                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z" stroke={"black"} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round"/>
                                <Path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke={"black"} strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601" stroke={"black"} strokeWidth={2} stroke-miterlimit="10"/>
                            </Svg>

                        </View>
                        <Text style={styles.buttonText}>Notifications</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"chevron-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={styles.buttonIcon}>

                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M16.96 6.16998C18.96 7.55998 20.34 9.76998 20.62 12.32" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M8.18994 20.94C9.34994 21.53 10.6699 21.86 12.0599 21.86C13.3999 21.86 14.6599 21.56 15.7899 21.01" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M4.83005 19.92C6.3654 19.92 7.61005 18.6753 7.61005 17.14C7.61005 15.6046 6.3654 14.36 4.83005 14.36C3.2947 14.36 2.05005 15.6046 2.05005 17.14C2.05005 18.6753 3.2947 19.92 4.83005 19.92Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M19.1699 19.92C20.7052 19.92 21.9499 18.6753 21.9499 17.14C21.9499 15.6046 20.7052 14.36 19.1699 14.36C17.6345 14.36 16.3899 15.6046 16.3899 17.14C16.3899 18.6753 17.6345 19.92 19.1699 19.92Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>

                        </View>
                        <Text style={styles.buttonText}>Social</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"chevron-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <View style={styles.buttonIcon}>

                        <Ionicons
                            name={"information-circle-outline"}
                            size={28}>
                        </Ionicons>
                        </View>
                        <Text style={styles.buttonText}>Help</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"chevron-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                </View>
                <Text style={styles.description}>
                </Text>

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
        marginTop: 50,
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
        color: '#000000',
        marginBottom: 5,
        fontFamily: 'Sora-SemiBold'

    },
    email: {
        fontSize: 12,
        color: 'grey',
        fontFamily: 'Sora-Regular'

    },
    titlename: {
        fontSize: 22,
        color: '#000000',
        marginTop: 20,
        marginBottom: 20,
    },
    profileDetail: {
        alignSelf: 'center',
        marginTop: 0,
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
        padding: 10,
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
        //justifyContent: 'left',
        alignItems: 'center',
        marginBottom: 5,
        width: 350,
        borderRadius: 15,


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
        //color: '#355af9',
        color: '#000000',
    },
    buttonIcon: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 50,
        marginRight: 20,
        //flexDirection: 'row',
    },
    buttonArrow: {
        padding: 15,
        marginLeft: 'auto',

    },
})

