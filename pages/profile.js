import {StatusBar} from "expo-status-bar";

import {StyleSheet, Text, TextInput, Image, TouchableOpacity, View} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import {TailwindProvider} from "tailwindcss-react-native";

import BottomSheet from "react-native-simple-bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import * as React from "react";
import {SafeAreaView} from "react-navigation";

import QRCode from "react-native-qrcode-svg";

//export function Profile() {

export function Profile() {
    const panelRef = React.useRef(null);
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View
                    style={styles.headerContent}>
                    <Text style={styles.titlename}>Profile</Text>
                    <Image
                        style={styles.avatar}
                        source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}}
                    />
                    <Text style={styles.name}>Big Doodoo</Text>
                    <Text style={styles.email}>bigdoodoo@yahoo.com</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Ionicons
                            style={styles.buttonIcon}
                            name={"man-outline"}
                            size={28}>
                        </Ionicons>
                        <Text style={styles.buttonText}>Account</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"arrow-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Ionicons
                            style={styles.buttonIcon}
                            name={"card-outline"}
                            size={28}>
                        </Ionicons>
                        <Text style={styles.buttonText}>Payment</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"arrow-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Ionicons
                            style={styles.buttonIcon}
                            name={"shield-checkmark-outline"}
                            size={28}>
                        </Ionicons>
                        <Text style={styles.buttonText}>Security</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"arrow-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Ionicons
                            style={styles.buttonIcon}
                            name={"notifications-outline"}
                            size={28}>
                        </Ionicons>
                        <Text style={styles.buttonText}>Notifications</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"arrow-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Ionicons
                            style={styles.buttonIcon}
                            name={"share-social-outline"}
                            size={28}>
                        </Ionicons>
                        <Text style={styles.buttonText}>Social</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"arrow-forward-outline"}
                            size={30}>
                        </Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Ionicons
                            style={styles.buttonIcon}
                            name={"information-circle-outline"}
                            size={28}>
                        </Ionicons>
                        <Text style={styles.buttonText}>Help</Text>
                        <Ionicons
                            style={styles.buttonArrow}
                            name={"arrow-forward-outline"}
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
        color: '#000000',
        fontWeight: '60',
        marginBottom: 5,

    },
    email: {
        fontSize: 12,
        color: 'grey',
        fontWeight: '60',
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
        //color: '#355af9',
        color: '#000000',
    },
    buttonIcon: {
        padding: 15,
        //flexDirection: 'row',
    },
    buttonArrow: {
        padding: 15,
        marginLeft: 'auto',

    },
})

