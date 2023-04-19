import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {getTransactions, getRequest, getSingleRequest, acceptRequest, deleteRequest} from '../Scripts/HandleDB';
import * as Haptics from "expo-haptics";
import * as React from "react";
import { SafeAreaView } from "react-navigation";
import {useFonts} from "expo-font";
import {TransactionItem, RequestItem} from "../components/TransactionItem";
import {useEffect, useState} from "react";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Ionicons from "react-native-vector-icons/Ionicons";
import primaryColor from "../Constants";



export const Request = ({navigator, route}) => {

    const [data, setData] = useState(null)


    useEffect(()=> {


        if(data == null){
            getSingleRequest("20011188", route.params.data).then(res=>{
                setData(res)
            })
        }


    })


    const showSuccess = () => {
        Toast.show({
            type: 'success',
            text1: 'Request Accepted',
        });
    }

    const showFail = () => {
        Toast.show({
            type: 'error',
            text1: 'Error Accepting Request',
        });
    }

    const showReject = () => {
        Toast.show({
            type: 'reject',
            text1: 'Rejected Request',
        });
    }

    const toastConfig = {

        success: ({ text1, props }) => (

            <View style={{ height: 60, width: '90%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20, borderRadius: 100, marginTop: 20, shadowRadius: 20, shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 10}}}>
                <View style={{padding: 5, marginRight: 20, backgroundColor: '#30ff7c', borderRadius: 100}}>
                    <Ionicons name={"checkmark-outline"} size={20} color={'white'}/>
                </View>
                <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16}}>{text1}</Text>

            </View>
        ),

        error: ({ text1, props }) => (

            <View style={{ height: 60, width: '90%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20, borderRadius: 100, marginTop: 20, shadowRadius: 20, shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 10}}}>
                <View style={{padding: 5, marginRight: 20, backgroundColor: '#ff304c', borderRadius: 100}}>
                    <Ionicons name={"close-outline"} size={20} color={'white'}/>
                </View>
                <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16}}>{text1}</Text>

            </View>
        ),

        reject: ({ text1, props }) => (

            <View style={{ height: 60, width: '90%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20, borderRadius: 100, marginTop: 20, shadowRadius: 20, shadowColor: '#000', shadowOpacity: .1, shadowOffset: {width: 0, height: 10}}}>
                <View style={{padding: 5, marginRight: 20, backgroundColor: '#ff304c', borderRadius: 100}}>
                    <Ionicons name={"close-outline"} size={20} color={'white'}/>
                </View>
                <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16}}>{text1}</Text>

            </View>
        )
    };




    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if(!fontLoaded){
        return <></>
    }
    else

        return (
            <View>
                <SafeAreaView style={styles.body}>

                    <View>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24, marginBottom: 20, zIndex: 1}}>Jack Patterson would like to send you DuckBils</Text>
                        <View>
                            <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'left', fontSize: 42}}>
                                {data !== null ?
                                    "$" + data.data().amount : ""
                                }
                            </Text>
                        </View>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        marginBottom: 20,
                        justifyContent: 'center',
                        maxWidth: '100%',
                        marginTop: 20
                    }}>

                        <TouchableOpacity onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            deleteRequest("20011188",  route.params.data).then(()=>showReject()).catch(()=>showFail())
                        }} style={{
                            flex:1,
                            borderWidth: 1,
                            borderColor: 'black',
                            padding: 15,
                            borderRadius: '100%',
                            marginTop: 10,
                            marginRight: 10
                        }}>
                            <Text style={{
                                textAlign: "center",
                                fontFamily: 'Sora-Regular',
                                fontSize: 20,
                            }}>Reject</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            acceptRequest(data.data().from, "20011188", 1, data.data().type, route.params.data).then(()=>showSuccess()).catch(()=>showFail())
                        }} style={{
                            flex:1,
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
                            }}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                    <Toast config={toastConfig} />

                </SafeAreaView>

            </View>
        );
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        paddingTop: 70,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 0,
    }
})