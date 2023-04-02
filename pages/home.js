import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions, AppLoading, Button, Easing,
} from "react-native";
import {
    useFonts,
} from "expo-font";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useEffect, useState, useRef} from "react";
import * as Haptics from "expo-haptics";
import * as React from "react";
import {SafeAreaView} from "react-navigation";
import QRCodeStyled from 'react-native-qrcode-styled';
import Svg, {
    Path,
} from 'react-native-svg';
import Ionicons from "react-native-vector-icons/Ionicons";
import {Keypad} from "./keypad";
import BottomSheet from "react-native-simple-bottom-sheet";
import {Scanner} from './Scanner';
import {SendComp} from "./Send";
import LottieView from "lottie-react-native";

export function Home() {
    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    const panelRef = React.useRef(0);
    const panelRef2 = React.useRef(0);

    const panelRef3 = React.useRef(0);


    const [balance, setBalance] = useState("$---.--");

    const [balanceType, changeBalanceType] = useState(0);

    const animation = useRef(null);


    function handleQR() {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        panelRef.current.togglePanel();
    }

    function getBills() {
        setBalance("$300.50")
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    function getDiningDollars() {
        setBalance("$200.00")
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    function getSwipes() {
        setBalance("145 Swipes")
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    const Stack = createStackNavigator();


    useEffect(() => {
        setBalance("$300.50")
    }, [])

    const HomeComp = ({navigation}) => {
        return (
            <View>
                <SafeAreaView style={styles.body}>
                    <View>
                        <View
                            style={{
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "flex-start",
                                marginTop: 20,
                            }}
                        >
                            <Text style={styles.title}>Your Balance</Text>
                            <Text style={{
                                fontSize: 48,
                                fontWeight: 400,
                                marginTop: 10,
                                fontFamily: 'Sora-SemiBold'
                            }}>{balance}</Text>

                            <View style={{flexDirection: 'row', maxWidth: '100%', gap: 10, marginTop: 20}}>
                                {balanceType === 0 ? (
                                        <TouchableOpacity onPress={() => {
                                            getBills();
                                        }
                                        } style={{
                                            flex: 1,
                                            backgroundColor: '#355af9',
                                            borderRadius: '100%',
                                            paddingVertical: 10
                                        }}>
                                            <Text style={{
                                                fontFamily: 'Sora-SemiBold',
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: 'white'
                                            }}>DuckBills</Text>
                                        </TouchableOpacity>
                                    ) :
                                    (
                                        <TouchableOpacity onPress={() => {
                                            getBills();
                                            changeBalanceType(0)
                                        }} style={{
                                            flex: 1,
                                            borderColor: '#355af9',
                                            borderWidth: 1,
                                            borderRadius: '100%',
                                            paddingVertical: 10
                                        }}>
                                            <Text style={{
                                                fontFamily: 'Sora-SemiBold',
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: '#355af9'
                                            }}>DuckBills</Text>
                                        </TouchableOpacity>
                                    )}

                                {balanceType === 1 ? (
                                        <TouchableOpacity onPress={() => {
                                            getDiningDollars();
                                            changeBalanceType(1);


                                        }} style={{
                                            flex: 1,
                                            backgroundColor: '#355af9',
                                            borderRadius: '100%',
                                            paddingVertical: 10
                                        }}>
                                            <Text style={{
                                                fontFamily: 'Sora-SemiBold',
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: 'white'
                                            }}>Dining</Text>
                                        </TouchableOpacity>
                                    ) :
                                    (
                                        <TouchableOpacity onPress={() => {
                                            getDiningDollars();

                                            changeBalanceType(1);
                                        }

                                        } style={{
                                            flex: 1,
                                            borderColor: '#355af9',
                                            borderWidth: 1,
                                            borderRadius: '100%',
                                            paddingVertical: 10
                                        }}>
                                            <Text style={{
                                                fontFamily: 'Sora-SemiBold',
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: '#355af9'
                                            }}>Dining</Text>
                                        </TouchableOpacity>
                                    )}

                                {balanceType === 2 ? (
                                        <TouchableOpacity onPress={() => {
                                            getSwipes();
                                            changeBalanceType(2);


                                        }} style={{
                                            flex: 1,
                                            backgroundColor: '#355af9',
                                            borderRadius: '100%',
                                            paddingVertical: 10
                                        }}>
                                            <Text style={{
                                                fontFamily: 'Sora-SemiBold',
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: 'white'
                                            }}>Swipes</Text>
                                        </TouchableOpacity>
                                    ) :
                                    (
                                        <TouchableOpacity onPress={() => {
                                            getSwipes();

                                            changeBalanceType(2);
                                        }

                                        } style={{
                                            flex: 1,
                                            borderColor: '#355af9',
                                            borderWidth: 1,
                                            borderRadius: '100%',
                                            paddingVertical: 10
                                        }}>
                                            <Text style={{
                                                fontFamily: 'Sora-SemiBold',
                                                fontSize: 16,
                                                textAlign: 'center',
                                                color: '#355af9'
                                            }}>Swipes</Text>
                                        </TouchableOpacity>
                                    )}

                            </View>

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
                                    justifyContent: 'space-around',
                                    gap: 10
                                }}>

                                    <TouchableOpacity onPress={() => {
                                        navigation.push('Send')
                                    }} style={{flexDirection: 'column', justifyContent: 'center',}}>


                                        <Svg width={45} height={45} viewBox="0 0 25 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M9.875 13.75C9.875 14.72 10.625 15.5 11.545 15.5H13.425C14.225 15.5 14.875 14.82 14.875 13.97C14.875 13.06 14.475 12.73 13.885 12.52L10.875 11.47C10.285 11.26 9.88501 10.94 9.88501 10.02C9.88501 9.17999 10.535 8.48999 11.335 8.48999H13.215C14.135 8.48999 14.885 9.26999 14.885 10.24"
                                                stroke="black" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <Path d="M12.375 7.5V16.5" stroke="black" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path
                                                d="M22.375 12C22.375 17.52 17.895 22 12.375 22C6.855 22 2.375 17.52 2.375 12C2.375 6.48 6.855 2 12.375 2"
                                                stroke="#1D3A70" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <Path d="M22.375 6V2H18.375" stroke="black" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M17.375 7L22.375 2" stroke="black" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>

                                        <Text style={{fontFamily: 'Sora-SemiBold', marginTop: 10, textAlign: 'center'}}>
                                            Send
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        panelRef2.current.togglePanel();
                                    }

                                    }>
                                        <Svg width="45" height="45" style={{marginLeft: 5}} viewBox="0 0 25 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M10.375 13.75C10.375 14.72 11.125 15.5 12.045 15.5H13.925C14.725 15.5 15.375 14.82 15.375 13.97C15.375 13.06 14.975 12.73 14.385 12.52L11.375 11.47C10.785 11.26 10.385 10.94 10.385 10.02C10.385 9.17999 11.035 8.48999 11.835 8.48999H13.715C14.635 8.48999 15.385 9.26999 15.385 10.24"
                                                stroke="black" strokeWidth="1.2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <Path d="M12.875 7.5V16.5" stroke="black" strokeWidth="1.2"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path
                                                d="M22.875 12C22.875 17.52 18.395 22 12.875 22C7.355 22 2.875 17.52 2.875 12C2.875 6.48 7.355 2 12.875 2"
                                                stroke="#1D3A70" stroke-width="1.2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <Path d="M17.875 3V7H21.875" stroke="black" strokeWidth="1.2"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M22.875 2L17.875 7" stroke="black" strokeWidth="1.2"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>

                                        <Text style={{fontFamily: 'Sora-SemiBold', marginTop: 10, textAlign: 'center'}}>
                                            Deposit
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                        navigation.push('Scanner');
                                    }
                                    } style={{paddingTop: 5}}>


                                        <Svg width="36" height="36" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M1 4V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H5"
                                                stroke="black" strokeWidth="1.2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <Path
                                                d="M1 14V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H5"
                                                stroke="black" strokeWidth="1.2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <Path
                                                d="M13 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V4"
                                                stroke="black" strokeWidth="1.2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <Path
                                                d="M13 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V14"
                                                stroke="black" strokeWidth="1.2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <Path d="M2 9H16" stroke="#1D3A70" strokeWidth="1.2" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </Svg>

                                        <Text style={{fontFamily: 'Sora-SemiBold', marginTop: 15, textAlign: 'center'}}>
                                            Scan
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {
                                        handleQR();
                                    }}>


                                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.2} stroke="black" width={45} height={45}>
                                            <Path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"/>
                                            <Path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"/>
                                        </Svg>


                                        <Text style={{fontFamily: 'Sora-SemiBold', marginTop: 10, textAlign: 'center'}}>
                                            My QR
                                        </Text>
                                    </TouchableOpacity>


                                </View>


                            </View>
                        </View>
                        <View>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                borderRadius: '100%',
                                marginTop: 20
                            }}>
                                <View style={{
                                    width: '100%',
                                    borderRadius: 14
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: 10,
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            fontFamily: 'Sora-Regular',
                                        }}>Recent Transactions</Text>
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
                                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Cammie Boas</Text>
                                                <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>Feb
                                                    15</Text>
                                            </View>
                                        </View>
                                        <Text style={{color: 'red'}}>-$2.00</Text>


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
                                                <Text style={{fontFamily: 'Sora-SemiBold'}}>Samuel Longley</Text>
                                                <Text style={{color: '#aaacae'}}>Feb 15</Text>
                                            </View>
                                        </View>
                                        <Text style={{color: 'green'}}>+$13.00</Text>


                                    </View>
                                </View>


                            </View>
                        </View>
                    </View>
                    <BottomSheet
                        sliderMinHeight={-20}
                        animationDuration={500}
                        animation={Easing.inOut(Easing.poly(5))}
                        sliderMaxHeight={Dimensions.get('window').height * .8}
                        isOpen={false}
                        style={{
                            padding: 20,
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                        ref={(ref) => (panelRef.current = ref)}
                    >
                        <View style={{
                            height: Dimensions.get('window').height * .8, flexDirection: "column",
                            justifyContent: "space-between",
                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 24,
                                    fontFamily: 'Sora-SemiBold',
                                    marginBottom: 30,
                                    textAlign: 'center'
                                }}>My QR Code</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <QRCodeStyled
                                        data={'Simple QR Code'}
                                        style={{backgroundColor: 'white'}}
                                        padding={20}
                                        pieceSize={12}
                                        innerEyesOptions={{borderRadius: 5}}

                                        outerEyesOptions={{borderRadius: 10}}

                                    />
                                </View>
                            </View>


                            <View style={{
                                flexDirection: 'row',
                                marginBottom: 100,
                                justifyContent: 'center',
                                maxWidth: '100%',
                                gap: 10,
                                marginTop: 50
                            }}>
                                <TouchableOpacity onPress={() => panelRef.current.togglePanel()} style={{
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
                        <Text style={{fontSize: 24, fontFamily: 'Sora-SemiBold'}}>Deposit</Text>
                        <View style={{flexDirection: 'row', gap: 10}}>
                            <TouchableOpacity onPress={() => {
                                panelRef2.current.togglePanel();
                                panelRef3.current.togglePanel();

                            }
                            } style={{
                                flex: 1,
                                paddingHorizontal: 15,
                                borderColor: 'black',
                                borderWidth: 1,
                                marginTop: 20,
                                borderRadius: 14,
                                paddingVertical: 20
                            }}>
                                <Text
                                    style={{fontSize: 16, textAlign: 'center', fontFamily: 'Sora-SemiBold',}}>$5</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => panelRef2.current.togglePanel()} style={{
                                flex: 1,
                                paddingHorizontal: 15,
                                borderColor: 'black',
                                borderWidth: 1,
                                marginTop: 20,
                                borderRadius: 14,
                                paddingVertical: 20
                            }}>
                                <Text
                                    style={{fontSize: 16, textAlign: 'center', fontFamily: 'Sora-SemiBold',}}>$10</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => panelRef2.current.togglePanel()} style={{
                                flex: 1,
                                paddingHorizontal: 15,
                                borderColor: 'black',
                                borderWidth: 1,
                                marginTop: 20,
                                borderRadius: 14,
                                paddingVertical: 20
                            }}>
                                <Text
                                    style={{fontSize: 16, textAlign: 'center', fontFamily: 'Sora-SemiBold',}}>$15</Text>

                            </TouchableOpacity>

                        </View>
                        <View style={{flexDirection: 'row', gap: 10}}>
                            <TouchableOpacity onPress={() => panelRef2.current.togglePanel()} style={{
                                flex: 1,
                                paddingHorizontal: 15,
                                borderColor: 'black',
                                borderWidth: 1,
                                marginTop: 20,
                                borderRadius: 14,
                                paddingVertical: 20,
                                marginBottom: 20,

                            }}>
                                <Text
                                    style={{fontSize: 16, textAlign: 'center', fontFamily: 'Sora-SemiBold',}}>$20</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => panelRef2.current.togglePanel()} style={{
                                flex: 1,
                                paddingHorizontal: 15,
                                borderColor: 'black',
                                borderWidth: 1,
                                marginTop: 20,
                                borderRadius: 14,
                                paddingVertical: 20,
                                marginBottom: 20,
                            }}>
                                <Text
                                    style={{fontSize: 16,  textAlign: 'center', fontFamily: 'Sora-SemiBold',}}>$50</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => panelRef2.current.togglePanel()} style={{
                                flex: 1,
                                paddingHorizontal: 15,
                                borderColor: 'black',
                                borderWidth: 1,
                                marginTop: 20,
                                borderRadius: 14,
                                paddingVertical: 20,
                                marginBottom: 20,

                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    fontFamily: 'Sora-SemiBold',
                                }}>$100</Text>

                            </TouchableOpacity>

                        </View>

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
                                }}>Deposit Successful</Text>
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
                                <TouchableOpacity onPress={() => {
                                    panelRef3.current.togglePanel();
                                }
                                } style={{
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
        )
    }


    if (!fontLoaded)
        return <AppLoading/>
    else
        return (

            <NavigationContainer independent={true}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeComp}/>
                    <Stack.Screen name="Scanner" component={Scanner}/>
                    <Stack.Screen name="Keypad" component={Keypad}/>
                    <Stack.Screen name="Send" component={SendComp}/>


                </Stack.Navigator>
            </NavigationContainer>
        )
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        height: "100%",
        paddingTop: 70,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Sora-Regular',
        color: '#aaacae'
    }


});
