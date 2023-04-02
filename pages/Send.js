import { StatusBar } from "expo-status-bar";
import {AppLoading, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { TailwindProvider } from "tailwindcss-react-native";


import BottomSheet from "react-native-simple-bottom-sheet";

import * as Haptics from "expo-haptics";

import * as React from "react";
import { SafeAreaView } from "react-navigation";
import {useFonts} from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";

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
                        }}
                    >
                        <TouchableOpacity onPress={()=>{
                            navigation.pop();
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

                        }}>
                            <Ionicons name={"arrow-back-outline"} size={36}/>
                        </TouchableOpacity>
                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>Send</Text>
                        <Ionicons style={{color: 'white'}} name={"arrow-back-outline"} size={36}/>


                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', border: 'black', borderWidth: 1, borderColor: '#d1d1d1', borderRadius: '100%', paddingHorizontal: 10, paddingVertical: 10}}>
                        <MaterialCommunityIcons style={{marginRight: 10}} name="search" size={30} color="#000" />
                        <View>
                            <TextInput placeholder="Search Users" style={{fontSize: 15, fontWeight: 'medium', width: '100%'}}/>
                        </View>
                    </View>

                    <TouchableOpacity onPress={()=>{
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        navigation.push("Keypad", {data: "Cammie Boas"})
                    }}>

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
                                <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Cammie Boas</Text>
                            </View>
                        </View>


                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        navigation.push("Keypad", {data: "Samuel Longley"})
                    }}>
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
                                <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Samuel Longley</Text>
                            </View>
                        </View>


                    </View>
                    </TouchableOpacity>
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
                                <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Alicia David</Text>
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
                                <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Danyal Thomson
                                </Text>
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
                                <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Eddie Haley
                                </Text>
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
                                <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Jade Farley
                                </Text>
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
                                <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Malik Cohen
                                </Text>
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
                                <Ionicons size={40} name={'person-circle-outline'}></Ionicons>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Virginia Maddox
                                </Text>
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
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: 600
    }
});
