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
import {getFriends, getUser, isFriend} from "../Scripts/HandleDB";
import ActivityIndicator from "../components/ActivityIndicator";

export const SendComp = ({navigation}) => {

    const [friends, setFriends] = useState(null);

    const [searchEntry, setSearchEntry] = useState("");

    const [searchListEntries, setSearchListEntries] = useState(null);

    useEffect(()=> {
            getFriendsList("20011188")
    })

    function getFriendsList(id){

        if(friends == null) {

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

    function setSearchList(val){
        setSearchEntry(val);
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
                        <TouchableOpacity onPress={()=>{
                            navigation.pop();
                        }}>
                            <Ionicons name={"chevron-back-outline"} size={30}/>
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 20}}>Send</Text>
                        <Ionicons style={{color: 'white'}} name={"arrow-back-outline"} size={36}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#f9f9f9', borderRadius: 30, paddingHorizontal: 16, paddingVertical: 16}}>
                        <Ionicons name="search-outline" size={20} color={"gray"} style={{"marginRight": 10}}/>
                            <TextInput onChangeText={(val)=>{
                                setSearchList(val);
                            }}
                            placeholder="Search Student" style={{fontSize: 15, fontFamily: 'Sora-Regular', width: '88%'}}/>
                    </View>

                    { searchEntry === "" || searchEntry.length === 0 ? (

                    <View style={{
                        width: '100%',
                        borderRadius: 14,
                        marginTop: 20
                    }}>

                        <Text style={{
                            fontSize: 20,
                            fontFamily: 'Sora-Regular',
                        }}>Friends</Text>
                        <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>

                        {friends != null ? (
                            friends.map(dt => {
                                    return (<UserBox send={true} docID={dt.id} navigate={navigation} name={dt.data().id}/>)})
                        ) : (
                            <Text>Loading</Text>
                        )}

                    </View>

                    </View>
                        ) : (
                            <View style={{
                                width: '100%',
                                borderRadius: 14,
                                marginTop: 20
                            }}>


                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>

                                    {searchListEntries != null && searchListEntries.length > 0 ? (
                                        <UserBox send={true} docID={searchListEntries.ID} navigate={navigation} name={searchListEntries.name}/>
                                    ) : (
                                        <Text>Search Not Found</Text>
                                    )}

                                </View>

                            </View>
                        )
                    }





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
