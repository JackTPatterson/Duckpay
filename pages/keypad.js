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

export const Keypad = ({navigation, route}) => {

    const [digit, setKey] = useState("");

    const panelRef = React.useRef(null);
    const panelRef2 = React.useRef(null);
    const panelRef3 = React.useRef(null);

    const animation = useRef(null);


    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if (!fontLoaded) {
        return <AppLoading/>
    } else
        return (
            <View>

                <SafeAreaView style={styles.body}>

                    <View>
                        <Text
                            style={{
                                fontFamily: "Sora-SemiBold",
                                fontSize: 30,
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            Enter Amount
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Sora-Regular",
                                fontSize: 16,
                                marginTop: 1,
                                color: "gray",
                                textAlign: "center",
                            }}
                        >
                            Send to {route.params.data}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            panelRef2.current.togglePanel();


                        }} style={{
                            marginTop: 20,
                            borderRadius: 15,
                            marginRight: 10,
                            borderColor: '#f1f1f1',
                            borderWidth: 1,
                            paddingVertical: 16,
                            paddingHorizontal: 24,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Ionicons name={"card-outline"} size={26}/>
                                <Text style={{marginLeft: 10, fontFamily: 'Sora-Regular'}}>
                                    Payment Method
                                </Text>
                            </View>
                            <Text style={{marginLeft: 10, fontWeight: 500, fontFamily: 'Sora-SemiBold'}}>
                                DuckBills
                            </Text>

                        </TouchableOpacity>
                    </View>


                    <View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'start'}}>
                            <NumberTicker
                                number={digit}
                                textSize={40}
                                duration={500}
                                isSecret={true}
                                style={{
                                    marginBottom: 50,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}
                                textStyle={{
                                    fontWeight: "bold",
                                    color: "black",
                                    width: "100%",
                                    fontFamily: "Sora-Regular",
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "1");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "2");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "3");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "4");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "5");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "6");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "7");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "8");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 4) {
                                            setKey((digit) => digit + "9");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 5) {
                                            setKey((digit) => digit + ".");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        if (digit.length < 5) {
                                            setKey((digit) => digit + "0");
                                        }
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
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        setKey((digit) => digit.slice(0, -1));
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
                                    <Icon
                                        name={"backspace-outline"}
                                        color={"black"}
                                        size={30}
                                    />
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
                                    }}>Pay</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => panelRef.current.togglePanel()} style={{
                                    width: '100%',
                                    borderWidth: 1,
                                    borderColor: '#355af9',
                                    backgroundColor: '#355af9',
                                    padding: 15,
                                    borderRadius: '100%',
                                    marginTop: 10
                                }}>
                                    <Text style={{
                                        textAlign: "center",
                                        fontFamily: 'Sora-Regular',
                                        fontSize: 20,
                                        color: 'white'
                                    }}>Pay</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>

                    <BottomSheet
                        animationDuration={500}
                        animation={Easing.inOut(Easing.poly(5))}
                        sliderMinHeight={-20}
                        isOpen={false}
                        style={{
                            padding: 20,
                            maxHeight: Dimensions.get('window').height * 0.8,
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        ref={(ref) => (panelRef.current = ref)}
                    >
                        <Text style={{fontSize: 24, fontFamily: 'Sora-SemiBold'}}>Confirm Payment</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginBottom: 20,
                            justifyContent: 'center',
                            maxWidth: '100%',
                            gap: 10,
                            marginTop: 20
                        }}>
                            <TouchableOpacity onPress={() => {
                                panelRef.current.togglePanel();
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                navigation.push('Home');
                            }} style={{
                                width: '50%',
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: '100%',
                                paddingVertical: 10
                            }}>
                                <Text style={{
                                    fontWeight: 600,
                                    fontSize: 16,
                                    textAlign: 'center',
                                    fontFamily: 'Sora-Regular',
                                }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                panelRef.current.togglePanel();
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                panelRef3.current.togglePanel();


                            }} style={{
                                width: '50%',
                                borderColor: '#355af9',
                                backgroundColor: '#355af9',
                                borderWidth: 1,
                                borderRadius: '100%',
                                paddingVertical: 10
                            }}>
                                <Text style={{
                                    fontWeight: 600,
                                    fontSize: 16,
                                    textAlign: 'center',
                                    fontFamily: 'Sora-Regular',
                                    color: 'white'
                                }}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheet>
                    <BottomSheet
                        animationDuration={500}
                        animation={Easing.inOut(Easing.poly(5))}
                        sliderMinHeight={-20}
                        isOpen={false}
                        style={{
                            padding: 20,
                            height: 400,
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        ref={(ref) => (panelRef2.current = ref)}
                    >
                        <Text style={{fontSize: 24, fontFamily: 'Sora-SemiBold'}}>Change Payment Method</Text>

                        <TouchableOpacity onPress={() => {
                            panelRef2.current.togglePanel();
                            panelRef3.current.togglePanel();
                        }} style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            borderColor: 'black',
                            borderWidth: 1,
                            marginTop: 20,
                            borderRadius: 14,
                            paddingVertical: 20
                        }}>
                            <Text
                                style={{fontSize: 16, textAlign: 'left', fontFamily: 'Sora-SemiBold',}}>DuckBills</Text>
                            <Ionicons name={"checkmark-outline"} size={24}/>
                        </TouchableOpacity>


                    </BottomSheet>


                    <BottomSheet
                        animationDuration={500}
                        onOpen={()=> {
                            animation.current?.play()
                        }}

                        onClose={()=>{
                            animation.current?.reset()
                        }}
                        animation={Easing.inOut(Easing.poly(5))}
                        sliderMinHeight={-20}
                        isOpen={false}
                        style={{
                            padding: 20,
                            maxHeight: Dimensions.get('window').height * 0.4,
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        ref={(ref) => (panelRef3.current = ref)}
                    >
                        <View style={{
                            height: Dimensions.get('window').height * 0.4, flexDirection: "column",
                            justifyContent: "space-between",
                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 24,
                                    fontFamily: 'Sora-SemiBold',
                                    marginBottom: 30,
                                    textAlign: 'center'
                                }}>Sending Payment</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <LottieView

                                        ref={animation}
                                        style={{
                                            width: 200,
                                            height: 200,
                                        }}
                                        speed={.7}
                                        loop={false}
                                        source={require('../assets/complete.json')}
                                    />

                                </View>
                            </View>


                            <View style={{
                                flexDirection: 'row',
                                marginBottom: 50,
                                justifyContent: 'center',
                                maxWidth: '100%',
                                gap: 10,
                                marginTop: 20
                            }}>
                                <TouchableOpacity onPress={() => panelRef3.current.togglePanel()} style={{
                                    width: '50%',
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    borderRadius: '100%',
                                    paddingVertical: 10
                                }}>
                                    <Text style={{
                                        fontWeight: 600,
                                        fontSize: 20,
                                        textAlign: 'center',
                                        fontFamily: 'Sora-SemiBold',
                                    }}>Close</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </BottomSheet>
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
