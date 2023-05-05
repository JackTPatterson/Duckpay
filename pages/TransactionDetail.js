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
import {getTransaction, getUser} from "../Scripts/HandleDB";
import NumberTicker from "../components/TextTicker";
import {GetType} from "../Scripts/GetType";
import ActivityIndicator from "../components/ActivityIndicator";

export const TransactionDetail = ({navigation, route}) => {

    const [data, setData] = useState(null);
    const [name, setName] = useState(null);


    useEffect(()=> {
        getTransactionDetails(route.params.data)
        console.log(route.params.data)
    })

    function getTransactionDetails(id){
        if(data === null) {
            getTransaction("20011188", id).then(res => {
                setData(res);
                if(res.data().recieved) {
                    getUser(res.data().from).then(res => {
                        setName(res)
                    })
                }
                else{
                    getUser(res.data().to).then(res => {
                        setName(res)
                    })
                }
            })
        }
    }


    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if (!fontLoaded || data === null)
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
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 20}}>Transaction</Text>
                        <Ionicons style={{color: 'white'}} name={"arrow-back-outline"} size={36}/>
                    </View>

                    <View>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            borderRadius: '100%',
                            marginTop: 20
                        }}>
                            <View style={{
                                width: '100%',
                                backgroundColor: '#f9f9f9',
                                padding: 20,
                                borderRadius: 14,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                gap: 10
                            }}>

                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <View style={styles.success}>
                                        {data !== null ?
                                        <Ionicons name={data.data().status === 0 ? "checkmark-outline" : "refresh-outline"} color={"white"} size={20}/>
                                   : "" }
                                    </View>
                                    {data !== null ?
                                    <Text style={{textAlign: "center", marginTop: 4, fontFamily: "Sora-SemiBold"}}>Sent</Text> : "" }
                                </View>
                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    {data !== null ?

                                    <View style={data.data().status === 1 || data.data().status === 2 ? styles.success : styles.pending}>
                                        <Ionicons name={data.data().status === 1 || data.data().status === 2 ? "checkmark-outline" : "reload-outline"} color={data.data().status === 1 || data.data().status === 2 ? "white" : "black"} size={20}/>
                                    </View>
                                        : ""
                                    }
                                    {data !== null ?
                                    <Text style={{textAlign: "center", marginTop: 4, fontFamily: "Sora-SemiBold"}}>Pending</Text> : "" }
                                </View>



                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    {data !== null ?
                                    <View style={data.data().status === 1 ? styles.success : (data.data().status === 2 ? styles.rejected : styles.pending)}>

                                        <Ionicons name={data.data().status === 2 ? "close-outline" : data.data().status === 1 ? "checkmark-outline" : "reload-outline"} color={data.data().status === 1 || data.data().status === 2 ? "white" : "black"} size={20}/>
                                    </View>

                                        : ""
                                    }
                                    {data !== null ?
                                    <Text style={{textAlign: "center", marginTop: 4, fontFamily: "Sora-SemiBold"}}>{data.data().status == 0 || data.data().status == 1 ? "Accepted" : "Rejected"}</Text>
                                    : "" }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 30, alignItems: "flex-end", width: "100%"}}>

                        {
                            data !== null ?
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>${data.data().amount}</Text> : ""
                        }
                        {data !== null ?
                        <GetType type={data.data().type}/> : <></>
                        }

                    </View>
                    <View style={{height: 1, borderColor: '#f1f1f1', width: '100%', position: 'relative', borderWidth: .2, marginTop: 10}}>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 30, alignItems: "flex-end", width: "100%"}}>
                        {
                            data !== null ?
                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>{data.data().recieved ? "Sent From" : "Sent To"}</Text> : ""
                        }
                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>{name}</Text>

                    </View>
                    <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 30, alignItems: "flex-end", width: "100%"}}>

                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>Date Transferred</Text>
                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>
                            {
                                data !== null ?
                                    new Date(data.data().date.seconds*1000).toLocaleString().split(', ')[0]
                                    : ""
                            }
                        </Text>

                    </View>
                    <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 30, alignItems: "flex-end", width: "100%", paddingBottom: 50}}>
                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>Time Transfered</Text>
                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>
                            {
                                data !== null ?
                                new Date(data.data().date.seconds*1000).toLocaleString().split(', ')[1]
                                : ""


                        }</Text>

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
    },

    success: {
        flexDirection: 'row',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        backgroundColor: '#42ff6e',
    },
    pending: {
        flexDirection: 'row',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        backgroundColor: '#f1f1f1',
    },
    rejected: {
        flexDirection: 'row',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        backgroundColor: '#ef476f',
    }
});
