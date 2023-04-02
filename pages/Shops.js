import {StyleSheet, Text, View, Easing} from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";




export function Shops() {

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
                                <Ionicons size={40} name={'cash-outline'}></Ionicons>
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
                                <Ionicons size={40} name={'cash-outline'}></Ionicons>
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
        //borderColor: '#355af9',
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

