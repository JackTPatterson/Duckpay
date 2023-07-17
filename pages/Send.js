import {AppLoading, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import * as React from "react";
import {SafeAreaView} from "react-navigation";
import {useFonts} from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import {UserBox} from "../components/UserBox";
import Svg, {Path} from "react-native-svg";
import {useEffect, useState} from "react";
import {getFriends, getUser, isFriend} from "../Scripts/HandleDB";
import ActivityIndicator from "../components/ActivityIndicator";
import FriendItem from "../components/FriendItem";

export const SendComp = ({navigation}) => {

    const [friends, setFriends] = useState(null);


    useEffect(() => {
        getFriendsList("20011188")
    })

    function getFriendsList(id) {

        if (friends == null) {

            getFriends(id).then(res => {
                let lst = []
                res.forEach((data) => {
                        lst.push(data);
                    }
                )
                setFriends(lst)
            })
        }

    }


    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if (!fontLoaded || friends === null)
        return <ActivityIndicator/>
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
                        <TouchableOpacity onPress={() => {
                            navigation.pop();
                        }}>
                            <Ionicons name={"chevron-back-outline"} size={30}/>
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 20}}>Send</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.push("Search");
                        }}>
                            <Ionicons name={"search-outline"} size={30}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: '100%',
                        borderRadius: 14,
                    }}>

                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'Sora-Regular',
                        }}>Friends</Text>
                        <FlatList contentContainerStyle={{flexDirection: "row", justifyContent: 'flex-start'}}
                                  data={friends} snapToAlignment={'start'}
                                  renderItem={({item}) => <FriendItem send={true} docID={item.id}
                                                                      navigate={navigation}
                                                                      name={item.data().id}/>}>
                        </FlatList>
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
