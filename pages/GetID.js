import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppLoading, Dimensions, Easing,

} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {useFonts} from "expo-font";
import NumberTicker from "react-native-number-ticker";
import {useState, useRef} from 'react';
import BottomSheet from "react-native-simple-bottom-sheet";
import LottieView from 'lottie-react-native';
import * as Haptics from "expo-haptics";
import * as React from "react";
import {SafeAreaView} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Svg, {Path} from "react-native-svg";
import primaryColor from "../Constants";
import {addFriend} from '../Scripts/HandleDB';

export const GetID = ({navigation, route}) => {

    const [digit, setKey] = useState("");

    const panelRef = React.useRef(null);
    const panelRef2 = React.useRef(null);
    const panelRef3 = React.useRef(null);

    const animation = useRef(null);


    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });


    function handleInput(digitVal){
        Haptics.selectionAsync().then()
        if (!digit.includes(".")) {
            setKey((digit) => digit + digitVal);
        }
        if(digit.includes(".") && digit.split(".")[1].length < 2 && digitVal !== ".") {
            setKey((digit) => digit + digitVal);
        }
    }

    if (!fontLoaded) {
        return <AppLoading/>
    } else
        return (
            <View>

                <SafeAreaView style={styles.body}>

                    <View>
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
                            <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>Enter Your Student ID</Text>
                            <Ionicons name={"chevron-back-outline"} color={"white"} size={30}/>




                        </View>
                    </View>
                    <View>
                        <View style={ (digit.length == 0) ? {flexDirection: 'row', marginBottom: 36, justifyContent: 'space-between', alignItems: 'start'} : {flexDirection: 'row', marginBottom: 0, justifyContent: 'space-between', alignItems: 'start'}}>
                            <NumberTicker
                                number={digit}
                                textSize={56}
                                duration={300}
                                isSecret={true}
                                style={{
                                    marginBottom: 50,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}
                                textStyle={{
                                    fontFamily: 'Sora-SemiBold',
                                }}
                            />
                        </View>



                        <View style={{flexDirection: "column"}}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    fontFamily: "Sora-SemiBold",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("1");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("2");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("3");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>3</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: 10,
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("4");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>4</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("5");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>5</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("6");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>6</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: 10,
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("7");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>7</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("8");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("9");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={styles.numbers}>9</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: 10,
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput(".");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={(styles.numbers, styles.numbers)}>.</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        handleInput("0");
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={(styles.numbers, styles.numbers)}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        Haptics.selectionAsync().then()
                                        setKey((digit) => digit.slice(0, -1))


                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 10,
                                        marginRight: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M10.28 20.25H17C19.76 20.25 22 18.01 22 15.25V8.75C22 5.99 19.76 3.75 17 3.75H10.28C8.86999 3.75 7.52999 4.34 6.57999 5.39L3.04999 9.27C1.63999 10.82 1.63999 13.18 3.04999 14.73L6.57999 18.61C7.52999 19.66 8.86999 20.25 10.28 20.25Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M16 14.47L11.06 9.53003" stroke={"black"} strokeWidth={2} stroke-linecap="round"/>
                                        <Path d="M11.06 14.47L16 9.53003" stroke={"black"} strokeWidth={2} stroke-linecap="round"/>
                                    </Svg>

                                </TouchableOpacity>
                            </View>
                            {digit.length === 0 ?
                                <TouchableOpacity disabled style={{
                                    width: '100%',
                                    borderColor: '#f1f1f1',
                                    borderWidth: 1,
                                    padding: 15,
                                    borderRadius: '100%',
                                    marginTop: 10
                                }}>
                                    <Text style={{
                                        textAlign: "center",
                                        fontFamily: 'Sora-Regular',
                                        fontSize: 20,
                                        color: 'gray'
                                    }}>Submit</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => {
                                    navigation.push("Home")
                                }} style={{
                                    width: '100%',
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
                                    }}>Submit</Text>
                                </TouchableOpacity>
                            }
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
        flexDirection: "column",
        justifyContent: "space-between",
    },

    numbers: {
        fontFamily: "Sora-Regular",
        fontSize: 30,
        color: "black",
    },
});
