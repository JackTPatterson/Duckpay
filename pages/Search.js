import {AppLoading, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as Haptics from "expo-haptics";
import * as React from "react";
import { SafeAreaView } from "react-navigation";
import {useFonts} from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useEffect, useState} from "react";
import {toastConfig} from "../Scripts/toast";
import Toast from "react-native-toast-message";

export const Search = ({navigation, route}) => {
    const [searchEntry, setSearchEntry] = useState(null);

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
                            navigation.pop()
                        }}>
                            <Ionicons name={"chevron-back-outline"} size={30}/>
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 20}}>Search</Text>
                        <Ionicons style={{color: 'white'}} name={"arrow-back-outline"} size={36}/>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#f9f9f9',
                        borderRadius: 30,
                        paddingHorizontal: 16,
                        paddingVertical: 16
                    }}>
                        <Ionicons name="search-outline" size={20} color={"gray"} style={{"marginRight": 10}}/>
                        <TextInput onChangeText={(val) => {
                            setSearchEntry(val);
                        }}
                                   placeholder="Search Student"
                                   style={{fontSize: 15, fontFamily: 'Sora-Regular', width: '88%'}}/>
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
