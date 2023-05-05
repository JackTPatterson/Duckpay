import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions, Easing

} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {useFonts} from "expo-font";
import NumberTicker from "../components/TextTicker";
import {useState, useRef, useEffect} from 'react';
import BottomSheet from "react-native-simple-bottom-sheet";
import LottieView from 'lottie-react-native';
import * as Haptics from "expo-haptics";
import * as React from "react";
import {SafeAreaView} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Svg, {Path} from "react-native-svg";
import primaryColor from "../Constants";
import {
    addFriend,
    addTransaction,
    getQuickPay,
    createRequest,
    getUser,
    getFriends,
    getUserColor
} from '../Scripts/HandleDB';
import Toast from "react-native-toast-message";
import {UserBottomSheet} from "../components/UserBottomSheet";
import {GetType} from "../Scripts/GetType";
import LoadingPage from "../components/ActivityIndicator";

export const Keypad = ({navigation, route}) => {

    const [digit, setKey] = useState("");


    const [data, setData] = useState(null);

    const panelRef = React.useRef(null);
    const panelRef2 = React.useRef(null);
    const panelRef3 = React.useRef(null);
    const panelRef4 = React.useRef(null);

    const animation1 = useRef(null);
    const animation2 = useRef(null);

    const [success, setSuccess] = useState(0);

    const [type, setType] = useState(0);

    const [name, setName] = useState(null);
    const [color, setColor] = useState(null);

    const [isFriend, setIsFriend] = useState(true);


    useEffect(() => {
        getUser(route.params.data).then(res => {
            setName(res);
        }).then(()=>{
            getUserColor(route.params.data).then((res)=>{
                setColor(res)

            })
        })

    })

    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });


    function handleInput(digitVal) {
        Haptics.selectionAsync()
            if (!digit.includes(".")) {
                setKey((digit) => digit + digitVal);
            }
            if (digit.includes(".") && digit.split(".")[1].length < 2 && digitVal !== ".") {
                setKey((digit) => digit + digitVal);
            }

    }


    if (!fontLoaded || !name || color === null || type === null) {
        return <LoadingPage/>
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
                            <TouchableOpacity onPress={() => {
                                navigation.popToTop();
                            }}>
                                <Ionicons name={"chevron-back-outline"} size={30}/>
                            </TouchableOpacity>
                            <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 20}}>Transfer</Text>
                            <TouchableOpacity onPress={() => {
                                Haptics.selectionAsync()
                                panelRef4.current?.togglePanel();
                            }}>
                                <View
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: '100%',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: color,
                                    }}
                                >
                                    {name !== null ?
                                        <Text style={{
                                            fontFamily: "Sora-SemiBold",
                                            fontSize: 16,
                                            color: "white",
                                        }}>{name.split(" ")[0].slice(0, 1)}{name.split(" ")[1].slice(0, 1)}</Text>
                                        : <></>
                                    }
                                </View>
                            </TouchableOpacity>


                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                Haptics.selectionAsync()
                                panelRef2.current.togglePanel();
                            }} style={{
                                borderRadius: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                Haptics.selectionAsync()
                                panelRef2.current.togglePanel();
                            }} style={{
                                borderRadius: 15,
                                paddingBottom: 16,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View
                                        style={{
                                            padding: 15,
                                            backgroundColor: '#f9f9f9',
                                            borderRadius: 50,
                                            marginRight: 10
                                        }}>
                                        <Ionicons name={"card-outline"} size={26}/>
                                    </View>

                                    <Text style={{marginLeft: 10, fontFamily: 'Sora-SemiBold'}}>
                                        Payment Type
                                    </Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <GetType type={type}/>
                                    <Ionicons name={"chevron-forward"} size={26}/>

                                </View>


                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                Haptics.selectionAsync()
                                navigation.push("Message", {data: route.params.data})


                            }} style={{
                                borderRadius: 15,
                                borderColor: '#f1f1f1',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View
                                        style={{
                                            padding: 15,
                                            backgroundColor: '#f9f9f9',
                                            borderRadius: 50,
                                            marginRight: 10
                                        }}>
                                        <Ionicons name={"chatbubble-outline"} size={26}/>
                                    </View>
                                    <Text style={{marginLeft: 10, fontFamily: 'Sora-SemiBold'}}>
                                        Message
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{marginRight: 10, fontFamily: 'Sora-Regular'}}>
                                        {
                                            route.params.message !== undefined ?
                                                (route.params.message.length > 10 ? route.params.message.substring(0, 10) + "..." : route.params.message)
                                                : ""
                                        }
                                    </Text>
                                    <Ionicons name={"chevron-forward"} size={26}/>
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                height: 1,
                                borderColor: '#f1f1f1',
                                width: '100%',
                                position: 'relative',
                                borderWidth: .2,
                                marginTop: 10
                            }}>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View style={(digit.length === 0) ? {
                            flexDirection: 'row',
                            marginTop: 0,
                            justifyContent: 'space-between',
                            alignItems: 'start'
                        } : {
                            flexDirection: 'row',
                            marginBottom: 0,
                            justifyContent: 'space-between',
                            alignItems: 'start'
                        }}>
                            <View
                                style={{

                                    borderRadius: '100%',
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text style={{
                                    fontFamily: "Sora-Bold",
                                    fontSize: 56,
                                    color: "black",
                                }}>{type === 2 ? "" : "$"}</Text>
                            </View>

                            <NumberTicker
                                number={digit}
                                textSize={56}
                                duration={300}
                                style={{
                                    marginBottom: 0,
                                    marginTop: 0,
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
                                    marginTop: 0,
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
                                    marginTop: 0,
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
                                    marginTop: 0,
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => {
                                        if (digit.length > 0) {
                                            handleInput(".");
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
                                        if (digit.length > 0) {
                                            handleInput("0");
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
                                    <Text style={(styles.numbers)}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        Haptics.selectionAsync()
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
                                    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M10.28 20.25H17C19.76 20.25 22 18.01 22 15.25V8.75C22 5.99 19.76 3.75 17 3.75H10.28C8.86999 3.75 7.52999 4.34 6.57999 5.39L3.04999 9.27C1.63999 10.82 1.63999 13.18 3.04999 14.73L6.57999 18.61C7.52999 19.66 8.86999 20.25 10.28 20.25Z"
                                            stroke={"black"} strokeWidth={2} stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <Path d="M16 14.47L11.06 9.53003" stroke={"black"} strokeWidth={2}
                                              stroke-linecap="round"/>
                                        <Path d="M11.06 14.47L16 9.53003" stroke={"black"} strokeWidth={2}
                                              stroke-linecap="round"/>
                                    </Svg>

                                </TouchableOpacity>
                            </View>
                            {digit.length === 0 || route.params.message === undefined || (parseInt(digit) < 0.01)
                                ?
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
                                <TouchableOpacity onPress={() => {
                                    if(type !== 2) {
                                        if (!digit.includes(".")) {
                                            setKey((digit) => digit + ".");
                                            setKey((digit) => digit + "0");
                                            setKey((digit) => digit + "0");

                                        } else if (digit.split(".")[1].length === 0) {
                                            setKey((digit) => digit + "0");
                                            setKey((digit) => digit + "0");

                                        } else if (digit.split(".")[1].length === 1) {
                                            setKey((digit) => digit + "0");
                                        }
                                    }
                                    panelRef.current.togglePanel();

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
                        <View>

                            <View style={{
                                flexDirection: "row",
                                width: '100%',
                                alignItems: 'center',
                                marginBottom: 20,
                                justifyContent: 'space-between'
                            }}>
                                <Text style={{
                                    fontSize: 24,
                                    fontFamily: 'Sora-SemiBold',
                                    textAlign: 'center'
                                }}>Confirm Payment</Text>


                                <TouchableOpacity style={{
                                    padding: 3,
                                    width: 40,
                                    height: 40,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: "#f9f9f9",
                                    borderRadius: 100
                                }} onPress={() => panelRef.current.togglePanel()}>
                                    <Ionicons name={"close-outline"} size={27}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                borderRadius: '100%',
                                marginRight: 10
                            }}>
                                <TouchableOpacity onPress={() => {
                                    Haptics.selectionAsync()
                                    panelRef4.current?.togglePanel();
                                }}>
                                    <View
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '100%',
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: color,
                                        }}
                                    >
                                        {name !== null ?
                                            <Text style={{
                                                fontFamily: "Sora-SemiBold",
                                                fontSize: 16,
                                                color: "white",
                                            }}>{name.split(" ")[0].slice(0, 1)}{name.split(" ")[1].slice(0, 1)}</Text>
                                            : <></>
                                        }
                                    </View>
                                </TouchableOpacity>
                                {name !== null ?
                                <Text style={{
                                    textAlign: "left",
                                    fontFamily: 'Sora-Regular',
                                    fontSize: 20,
                                }}>{name.toString()}</Text> : <></> }
                            </View>

                            <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 30, alignItems: "center", width: "100%"}}>


                                        <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>${digit}</Text>


                                <Text
                                    style={{fontSize: 16, textAlign: 'left', fontFamily: 'Sora-SemiBold'}}>{type === 0 ? "DuckBills" : type === 0 ? "Dining Dollars" : "Swipes"}</Text>



                            </View>

                            <View style={{
                                flexDirection: 'row',
                                marginBottom: 20,
                                justifyContent: 'center',
                                maxWidth: '100%',
                                marginTop: 20
                            }}>
                                <TouchableOpacity onPress={() => {
                                    panelRef.current.togglePanel();
                                    navigation.push('Home');
                                }} style={{
                                    flex: 1,
                                    backgroundColor: '#f9f9f9',
                                    padding: 15,
                                    borderRadius: '100%',
                                    marginTop: 10,
                                    marginRight: 10
                                }}>
                                    <Text style={{
                                        textAlign: "center",
                                        fontFamily: 'Sora-Regular',
                                        fontSize: 20,
                                    }}>Cancel</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    panelRef.current.togglePanel();
                                    Haptics.selectionAsync()
                                    panelRef3.current.togglePanel();
                                }} style={{
                                    flex: 1,
                                    borderWidth: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
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
                                        marginRight: 10,
                                        color: 'white'
                                    }}>Send</Text>
                                    <Svg style={{transform: [{ rotate: '-45deg'}]}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                        <Path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </Svg>




                                </TouchableOpacity>
                            </View>
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
                        <View style={{
                            flexDirection: "row",
                            width: '100%',
                            alignItems: 'center',
                            marginBottom: 10,
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: 'Sora-SemiBold',
                                textAlign: 'center'
                            }}>Change Payment</Text>
                            <TouchableOpacity
                                TouchableOpacity style={{
                                padding: 3,
                                width: 40,
                                height: 40,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: "#f9f9f9",
                                borderRadius: 100
                            }} onPress={() => panelRef2.current.togglePanel()}>
                                <Ionicons name={"close-outline"} size={27}/>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => {
                            setType(0);
                            panelRef2.current.togglePanel();
                        }} style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            backgroundColor: type === 0 ? primaryColor: "white",
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            borderColor: type === 0 ? primaryColor: "black",
                            borderWidth: 1,
                            marginTop: 20,
                            borderRadius: 14,
                            paddingVertical: 20
                        }}>
                            <Text
                                style={{fontSize: 16, textAlign: 'left', fontFamily: 'Sora-SemiBold', color: type === 0 ? "white": "black"}}>DuckBills</Text>
                            {type === 0 ? <Ionicons name={"checkmark-outline"} color={"white"} size={24}/> : <></>}

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setType(1);
                            panelRef2.current.togglePanel();
                        }} style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            backgroundColor: type === 1 ? primaryColor: "white",
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            borderColor: type === 1 ? primaryColor: "black",
                            borderWidth: 1,
                            marginTop: 20,
                            borderRadius: 14,
                            paddingVertical: 20
                        }}>
                            <Text
                                style={{fontSize: 16, textAlign: 'left', fontFamily: 'Sora-SemiBold', color: type === 1 ? "white": "black"}}>Dinning Dollars</Text>
                            {type === 1 ? <Ionicons name={"checkmark-outline"} color={"white"} size={24}/> : <></>}

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setType(2);
                            panelRef2.current.togglePanel();
                        }} style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            backgroundColor: type === 2 ? primaryColor: "white",
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            borderColor: type === 2 ? primaryColor: "black",
                            borderWidth: 1,
                            marginTop: 20,
                            borderRadius: 14,
                            paddingVertical: 20,
                            marginBottom: 20,

                        }}>
                            <Text
                                style={{fontSize: 16, textAlign: 'left', fontFamily: 'Sora-SemiBold', color: type === 2 ? "white": "black"}}>Swipes</Text>
                            {type === 2 ? <Ionicons name={"checkmark-outline"} color={"white"} size={24}/> : <></>}
                        </TouchableOpacity>


                    </BottomSheet>


                    <BottomSheet
                        sliderMinHeight={-20}
                        animationDuration={500}
                        animation={Easing.inOut(Easing.poly(5))}
                        sliderMaxHeight={Dimensions.get('window').height * .8}
                        isOpen={success !== 0}
                        onOpen={() => {
                            animation2.current?.play()
                            addTransaction("20011188", digit, route.params.data, type, false, "20011188", 0).then(
                                (res) => {
                                    createRequest("20011188", "20011188", digit, type, route.params.message, res).then(
                                        () => animation2.current?.play()
                                    ).then(()=>setSuccess(1)).catch(()=>setSuccess(2))
                                }
                            ).then(()=>setSuccess(1)).catch(()=>setSuccess(2))
                        }}

                        onClose={() => {
                            animation2.current?.reset()
                            animation1.current?.reset()


                        }}
                        style={{
                            padding: 20,
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                        ref={(ref) => (panelRef3.current = ref)}
                    >
                        <View style={{
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}>
                            <View>
                                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>

                                    <LottieView
                                        ref={animation2}
                                        style={{
                                            width: 150,
                                            height: 150
                                        }}
                                        speed={.9}
                                        loop={success === 0}
                                        source={success === 0 ? require('../assets/loading.json') : success === 1 ? require('../assets/complete.json') : require('../assets/error.json')}
                                    />

                                    <Text style={{
                                        fontSize: 20,
                                        marginTop: 20,
                                        fontFamily: 'Sora-Regular',
                                        textAlign: 'center'
                                    }}>{success === 0 ? "Sending..." : success === 1 ? "Sent Payment" : "Send Failed" }</Text>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        marginTop: 30,
                                        alignItems: "flex-end",
                                        width: "100%"
                                    }}>

                                        <Text style={{
                                            fontFamily: 'Sora-SemiBold',
                                            fontSize: 24
                                        }}>{type === 2 ? "" : "$"}{digit}</Text>

                                        <GetType type={type}/>

                                    </View>
                                    {success === 1 ?
                                    <View style={{width: '100%'}}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        marginTop: 30,
                                        alignItems: "flex-end",
                                        width: "100%"
                                    }}>

                                        <Text style={{
                                            fontFamily: 'Sora-Regular',
                                            fontSize: 16,
                                            color: 'gray'
                                        }}>Recipient</Text>
                                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>{name}</Text>

                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        marginTop: 30,
                                        alignItems: "flex-end",
                                        width: "100%"
                                    }}>

                                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>Date
                                            Transferred</Text>
                                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>{
                                            new Date(Date.now()).toLocaleString().split(', ')[0]
                                        }</Text>

                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: "space-between",
                                        marginTop: 30,
                                        alignItems: "flex-end",
                                        width: "100%",
                                        paddingBottom: 50
                                    }}>
                                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>Time
                                            Transferred</Text>
                                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>{
                                            new Date(Date.now()).toLocaleString().split(', ')[1]

                                        }</Text>

                                    </View>
                                    </View> : <></>
                                    }
                                    <TouchableOpacity onPress={() => {
                                        navigation.push("Home");

                                    }} style={{
                                        width: '100%',
                                        borderWidth: 1,
                                        borderColor: primaryColor,
                                        backgroundColor: primaryColor,
                                        padding: 15,
                                        borderRadius: '100%',
                                        marginTop: 10,
                                        marginBottom: 20
                                    }}>
                                        <Text style={{
                                            textAlign: "center",
                                            fontFamily: 'Sora-Regular',
                                            fontSize: 20,
                                            color: 'white'
                                        }}>Done</Text>
                                    </TouchableOpacity>


                                </View>

                            </View>

                        </View>

                    </BottomSheet>

                    {/*TODO: Rename friendID to userID */}
                    <UserBottomSheet name={name} toast={Toast} friendID={route.params.data} docID={route.params.docID} panel={panelRef4}/>
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
