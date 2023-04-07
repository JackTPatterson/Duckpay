import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    AppLoading,
    Easing,
    Share,
} from "react-native";
import {
    useFonts,
} from "expo-font";

import primaryColor from '../Constants';
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
import NumberTicker from "react-native-number-ticker";
import {TransactionList} from "../components/TransactionList";
import {UserBox} from "../components/UserBox";
import users from "../Scripts/HandleDB";
import getFriends from "../Scripts/HandleDB";
import addFriend from "../Scripts/HandleDB";
import getUser from "../Scripts/HandleDB";
import {Setup} from "./Setup";
import {GetID} from "./GetID";

export function Home() {

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
        changeBalanceType(0);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    function getDiningDollars() {
        setBalance("$200.00")
        changeBalanceType(1);

        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    function getSwipes() {
        setBalance("145")
        changeBalanceType(2);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    const Stack = createStackNavigator();

    useEffect(() => {
        getBills();
    }, [])



    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    const HomeComp = ({navigation}) => {
        if(!fontLoaded){
            return <AppLoading/>
        }
        else

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
                            <NumberTicker
                                number={balance}
                                textSize={40}
                                duration={300}
                                isSecret={true}


                                textStyle={{
                                    width: "100%",
                                    fontFamily: "Sora-SemiBold",
                                }}
                            />

                            <View style={{flexDirection: 'row', maxWidth: '100%', gap: 10, marginTop: 20}}>
                                <TouchableOpacity onPress={() => {
                                    getBills();
                                }
                                } style={balanceType === 0 ? styles.enabledButton : styles.disabledButton}>
                                    <Text
                                        style={balanceType === 0 ? styles.enabledText : styles.disabledText}>DuckBills</Text>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => {
                                    getDiningDollars();


                                }} style={balanceType === 1 ? styles.enabledButton : styles.disabledButton}>
                                    <Text
                                        style={balanceType === 1 ? styles.enabledText : styles.disabledText}>Dining</Text>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={() => {
                                    getSwipes();
                                }} style={balanceType === 2 ? styles.enabledButton : styles.disabledButton}>
                                    <Text
                                        style={balanceType === 2 ? styles.enabledText : styles.disabledText}>Swipes</Text>
                                </TouchableOpacity>

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
                                    justifyContent: 'space-between',
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
                                            marginBottom: 20,

                                            fontFamily: 'Sora-Regular',
                                        }}>Recent Transactions</Text>
                                    </View>
                                    <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
                                    <TransactionList info={"Monday, 15 January"} change={"+$13.00"} name={"Samuel Longley"}/>
                                    <TouchableOpacity onPress={()=> {(getUser("20011188")).then((res => console.log(res)))}}>
                                        <Text>Test</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={{
                                width: '100%',
                                borderRadius: 14,
                                marginTop: 20
                            }}>

                                <Text style={{
                                    fontSize: 20,
                                    fontFamily: 'Sora-Regular',
                                }}>Quick Pay</Text><View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>

                                <UserBox navigate={navigation} name={"Samuel Longley"}/>
                                <UserBox navigate={navigation} name={"Samuel Longley"}/>
                                <UserBox navigate={navigation} name={"Samuel Longley"}/>
                                <UserBox navigate={navigation} name={"Samuel Longley"}/>

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
                                <View style={{flexDirection: "row", width: '100%', alignItems: 'center', marginBottom: 30, justifyContent: 'space-between'}}>
                                    <Text style={{
                                        fontSize: 24,
                                        fontFamily: 'Sora-SemiBold',
                                        textAlign: 'center'
                                    }}>My QR Code</Text>
                                    <TouchableOpacity onPress={()=>panelRef.current.togglePanel()}>
                                        <Ionicons name={"close-circle-outline"} size={35}/>
                                    </TouchableOpacity>
                                </View>

                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <QRCodeStyled
                                        data={'Simple QR Code'}
                                        style={{backgroundColor: 'white', borderRadius: 20, borderWidth: 1, borderColor: "black"}}
                                        padding={20}
                                        pieceSize={12}
                                        innerEyesOptions={{borderRadius: 5}}

                                        outerEyesOptions={{borderRadius: 10}}

                                    />
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <TouchableOpacity onPress={ async () => {

                                    Share.share({
                                        message: "Share Student ID"
                                    })
                                        .then((result) => console.log(result))
                                        .catch((errorMsg) => console.log(errorMsg));



                                }} style={{
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    padding: 15,
                                    borderRadius: '100%',
                                    marginTop: 20,
                                    marginHorizontal: 10
                                }}>
                                    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M16.96 6.16998C18.96 7.55998 20.34 9.76998 20.62 12.32" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M8.18994 20.94C9.34994 21.53 10.6699 21.86 12.0599 21.86C13.3999 21.86 14.6599 21.56 15.7899 21.01" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M4.83005 19.92C6.3654 19.92 7.61005 18.6753 7.61005 17.14C7.61005 15.6046 6.3654 14.36 4.83005 14.36C3.2947 14.36 2.05005 15.6046 2.05005 17.14C2.05005 18.6753 3.2947 19.92 4.83005 19.92Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                        <Path d="M19.1699 19.92C20.7052 19.92 21.9499 18.6753 21.9499 17.14C21.9499 15.6046 20.7052 14.36 19.1699 14.36C17.6345 14.36 16.3899 15.6046 16.3899 17.14C16.3899 18.6753 17.6345 19.92 19.1699 19.92Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>

                                </TouchableOpacity>
                                    <TouchableOpacity onPress={ async () => {
                                    }} style={{
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        padding: 15,
                                        borderRadius: '100%',
                                        marginTop: 20,
                                        marginHorizontal: 10

                                    }}>
                                        <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke={"black"} strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>



                                    </TouchableOpacity>
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
                        <View style={{flexDirection: "row", width: '100%', alignItems: 'center', marginBottom: 30, justifyContent: 'space-between'}}>
                            <Text style={{
                                fontSize: 24,
                                fontFamily: 'Sora-SemiBold',
                                textAlign: 'center'
                            }}>Deposit</Text>
                            <TouchableOpacity onPress={()=>panelRef2.current.togglePanel()}>
                                <Ionicons name={"close-circle-outline"} size={35}/>
                            </TouchableOpacity>
                        </View>
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
                                    style={{fontSize: 16, textAlign: 'center', fontFamily: 'Sora-SemiBold',}}>$50</Text>

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
                        onOpen={() => {
                            animation.current?.play()
                        }}

                        onClose={() => {
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
                                <View style={{flexDirection: "row", width: '100%', alignItems: 'center', marginBottom: 30, justifyContent: 'space-between'}}>
                                    <Text style={{
                                        fontSize: 24,
                                        fontFamily: 'Sora-SemiBold',
                                        textAlign: 'center'
                                    }}>Deposit Successful</Text>
                                    <TouchableOpacity onPress={()=>panelRef3.current.togglePanel()}>
                                        <Ionicons name={"close-circle-outline"} size={35}/>
                                    </TouchableOpacity>
                                </View>
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

                            </View>

                        </View>
                    </BottomSheet>
                </SafeAreaView>

            </View>
        )
    }




        if(!fontLoaded){
            return <AppLoading/>
        }
        else

        return (

            <NavigationContainer independent={true}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        useNativeDriver: false
                    }}
                    initialRouteName="Setup">
                    <Stack.Screen name="Setup" component={Setup}/>
                    <Stack.Screen name="ID" component={GetID}/>
                    <Stack.Screen name="Home"  component={HomeComp}/>
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
    },

    enabledButton: {
        flex: 1,
        backgroundColor: primaryColor,
        borderRadius: '100%',
        paddingVertical: 10
    },

    enabledText: {
        fontFamily: 'Sora-SemiBold',
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },

    disabledButton: {
        flex: 1,
        borderColor: primaryColor,
        borderWidth: 1,
        borderRadius: '100%',
        paddingVertical: 10
    },

    disabledText: {
        fontFamily: 'Sora-SemiBold',
        fontSize: 16,
        textAlign: 'center',
        color: primaryColor
    }


});
