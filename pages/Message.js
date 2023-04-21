import {AppLoading, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import * as React from "react";
import { SafeAreaView } from "react-navigation";
import {useFonts} from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import {UserBox} from "../components/UserBox";
import Svg, {Path} from "react-native-svg";
import {useEffect, useState} from "react";
import {getFriends, getUser} from "../Scripts/HandleDB";
import {toastConfig} from "../Scripts/toast";
import Toast from "react-native-toast-message";

export const Message = ({navigation, route}) => {

    const [friends, setFriends] = useState(null);

    const [message, setMessage] = useState(null);

    useEffect(()=> {
        getFriendsList("20011188")

    })

    function getFriendsList(id){
        if(friends === null) {
            getFriends(id).then(res => {
                let lst = []
                res.data().friends.forEach((data) => {
                        lst.push(data)
                    }
                )
                setFriends(lst);
            })
        }
    }



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
                            if(message !== null) {
                                navigation.push("Keypad", {data: route.params.data, message: message});
                            }
                            else {
                                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
                                Toast.show({
                                    type: 'tomatoToast',
                                    text1: 'Please Enter A Message'
                                });
                            }
                        }}>
                            <Ionicons name={"chevron-back-outline"} size={30}/>
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 20}}>Message</Text>
                        <Ionicons style={{color: 'white'}} name={"arrow-back-outline"} size={36}/>
                    </View>
                    <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#aaacae', borderRadius: 15, paddingHorizontal: 10, paddingVertical: 16}}>
                            <TextInput maxLength={255} onChangeText={(val)=>setMessage(val)} placeholder="Write a Message" style={{fontSize: 15, fontFamily: 'Sora-Regular', width: '100%'}}/>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16}}>Characters</Text>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16}}>{message !== null ? message.length : "0"}/255</Text>
                    </View>



                    <Toast config={toastConfig}/>

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
