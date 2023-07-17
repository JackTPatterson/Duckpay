import {
    AppLoading,
    Dimensions,
    Easing, FlatList,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {
    getTransactions,
    getRequest,
    deleteRequest,
    acceptRequest, getUser, changeTransactionStatus
} from '../Scripts/HandleDB';
import * as Haptics from "expo-haptics";
import * as React from "react";
import {SafeAreaView} from "react-navigation";
import {useFonts} from "expo-font";
import {TransactionItem, RequestItem} from "../components/TransactionItem";
import {useCallback, useEffect, useRef, useState} from "react";
import primaryColor from "../Constants";
import BottomSheet from "react-native-simple-bottom-sheet";
import {UNIXTODateConverter, UNIXToTime} from "../Scripts/UNIXTODateConverter";
import {NavigationContainer} from "@react-navigation/native";
import {TransactionDetail} from "./TransactionDetail";
import {createStackNavigator} from "@react-navigation/stack";
import Toast from "react-native-toast-message";
import {toastConfig} from "../Scripts/toast";
import {GetType} from "../Scripts/GetType";
import ActivityIndicator from "../components/ActivityIndicator";
import LottieView from "lottie-react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Svg, {Path} from "react-native-svg";
import {MessageDetails} from "./MessageDetail";

export const NotificationsComp = ({navigation}) => {
    const [data, setData] = useState(null);
    const [gotData, setGotData] = useState(false);

    const [today, setToday] = useState(null);

    const [request, setRequests] = useState(null);
    const [gotRequests, setGotRequests] = useState(false);

    const panelRef = React.useRef(null);

    const [currentData, setCurrentData] = useState({});

    const animation = useRef(null);



    useEffect(() => {

        animation.current?.play();

        if (request == null) {
            getRequestsList("20011188")
            setGotRequests(true);
        }
        if (data == null) {
            getTransactionsList("20011188")
            setGotData(true);
        }

    })

    function getTransactionsList(id) {

        getTransactions(id).then(res => {
            let todayLst = []
            let lst = []
            // res.forEach((data) => {
            //         if (new Date(data.data().date.seconds * 1000).toDateString() === new Date().toDateString()) {
            //             todayLst.push(data);
            //         } else {
            //             if (lst.length < 10) {
            //                 lst.push(data);
            //             }
            //         }
            //     }
            // )

            res.forEach((data) => {
                    lst.push(data);
                }
            )

            setData(lst)
        })


    }


    function getRequestsList(id) {
        getRequest(id).then(res => {
            let lst = []
            res.forEach((data) => {
                    lst.push(data)
                }
            )
            setGotRequests(true)
            setRequests(lst)
        })
    }

    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getRequestsList("20011188")
        getTransactionsList("20011188")


        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    let fontLoaded = useFonts({
        "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
        "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    });

    if (!fontLoaded || !gotData || !gotRequests)
        return <ActivityIndicator/>
    else if (data != null) {

            //Shows only if requests are sent

            return (
                <View>
                    <SafeAreaView style={styles.body}>

                        <View>
                            <Text style={{
                                fontFamily: 'Sora-SemiBold',
                                fontSize: 24,
                                marginBottom: 20,
                                zIndex: 1
                            }}>Activity</Text>
                        </View>

                             <View>


                            <FlatList horizontal={true} snapToAlignment={"start"}
                                      decelerationRate={"fast"}
                                      snapToInterval={Dimensions.get("window").width}
                                      showsHorizontalScrollIndicator={false} snapToStart={true} onMagicTap={()=>console.log(true)} data={request}
                                      renderItem={({item}) => {
                                          return <RequestItem fromID={item.data().from}
                                                              data={setCurrentData}
                                                              transactionID={item.data().transactionID}
                                                              panel={panelRef}
                                                              date={item.data().date.seconds}
                                                              message={item.data().message} docID={item.id}
                                                              from={item.data().from} id={item.id}
                                                              change={item.data().amount}
                                                              name={item.data().from}
                                                              type={item.data().type}/>
                                      }}>
                            </FlatList>
                            {request.length > 0 ?
                            <Text style={{fontFamily: "Sora-SemiBold", textAlign: 'right'}}>{request.length}{request.length > 1  ? " Requests": " Request"}</Text>
                            : <></>}
                            <Text style={request.length > 0 ? {
                                fontFamily: "Sora-Regular",
                                marginTop: 10,
                                marginBottom: 0,
                                fontSize: 20
                            } : {fontFamily: "Sora-Regular", marginBottom: 40, fontSize: 20}}>
                                { data.length > 0 || request.length > 0 ? "All Transactions" : "" }
                            </Text>
                            <FlatList keyExtractor={(item, index) => index.toString()}
                                      ListEmptyComponent={() => request.length > 0 ? <ReloadButton onRefresh={onRefresh}/> : <EmptyActivityList animation={animation}
                                                                                   onRefresh={onRefresh}/>}
                                      style={request.length > 0 ? {paddingTop: 20, height: '100%'} : {
                                          marginTop: -20,
                                          marginBottom: 50,
                                          height: '100%'
                                      }}
                                      refreshControl={
                                          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>} data={data}
                                      renderItem={({item}) => {
                                          let statusText = "";
                                          if (item.data().status === 0) {
                                              statusText = "Pending"
                                          }
                                          if (item.data().status === 1) {
                                              statusText = "Accepted"
                                          }
                                          if (item.data().status === 2) {
                                              statusText = "Rejected"
                                          }

                                          return <TransactionItem nav={navigation} docID={item.id} status={statusText}
                                                                  info={UNIXTODateConverter(item.data().date.seconds)}
                                                                  change={item.data().recieved ? "+$" + item.data().amount : "-$" + item.data().amount}
                                                                  name={item.data().to}/>
                                      }}>
                            </FlatList>


                        </View>


                    </SafeAreaView>
                    <Accept type={currentData.type} navigation={navigation} panel={panelRef}
                            reloadActionOne={getRequestsList}
                            reloadActionTwo={getTransactionsList}
                            date={UNIXTODateConverter(currentData.date)}
                            transactionID={currentData.transactionID} amount={currentData.amount}
                            name={currentData.name} fromID={currentData.fromID} message={currentData.msg}
                            docID={currentData.docID}
                            time={currentData.date}
                    />
                    <Toast config={toastConfig}/>
                </View>
            );
        }

}

function EmptyActivityList(props) {

    useEffect(()=>{
        props.animation.current?.play();
    })

    return (
        <View style={{
            height: "100%",
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>
            <Text style={{
                fontFamily: 'Sora-SemiBold',
                fontSize: 24,
                marginBottom: 0,
                zIndex: 1
            }}>Nothing To See Here</Text>
            <Text style={{
                fontFamily: 'Sora-Regular',
                fontSize: 16,
                textAlign: 'center',
                maxWidth: 300,
                marginVertical: 10,
                marginBottom: 50,
                zIndex: 1
            }}>When a transaction is made, it will appear here</Text>
            <LottieView
                ref={props.animation}
                style={{
                    width: 350,
                    height: 350
                }}
                speed={1}
                loop={true}
                source={require('../assets/empty.json')}/>

        </View>
    )
}

function ReloadButton(props){
    return (
        <View>
            <Text style={{
                fontFamily: 'Sora-SemiBold',
                fontSize: 24,
                marginBottom: 0,
                zIndex: 1
            }}>Nothing To See Here</Text>
            <Text style={{
                fontFamily: 'Sora-Regular',
                fontSize: 16,
                textAlign: 'left',
                maxWidth: 300,
                marginVertical: 10,
                marginBottom: 20,
                marginTop: 20,
            }}>When a transaction is made, it will appear here</Text>
            <TouchableOpacity onPress={() => {
                props.onRefresh()
                Haptics.selectionAsync();


            }} style={{

                backgroundColor: '#f9f9f9',
                paddingVertical: 15,
                paddingHorizontal: 30,
                borderRadius: '100%',
                marginRight: 10
            }}>
                <Text style={{
                    textAlign: "center",
                    fontFamily: 'Sora-Regular',
                    fontSize: 20,
                }}>Reload</Text>
            </TouchableOpacity>
        </View>

    )
}

function Accept(props) {

    let currentDate = new Date(props.time * 1000).toLocaleTimeString();

    let time = new Date(props.time * 1000);


    return (
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
            ref={(ref) => (props.panel.current = ref)}
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
                    }}>Accept Payment</Text>


                    <TouchableOpacity onPress={props.panel.current?.togglePanel} style={{
                        padding: 3,
                        width: 40,
                        height: 40,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "#f9f9f9",
                        borderRadius: 100
                    }}>
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
                    <View>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: '100%',
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: primaryColor,
                            }}
                        >
                            {props.name ?
                                <Text style={{
                                    fontFamily: "Sora-SemiBold",
                                    fontSize: 16,
                                    color: "white",
                                }}>{props.name.toString().split(" ")[0].substring(0, 1)}{props.name.toString().split(" ")[1].substring(0, 1)}</Text> : <></>}
                        </View>
                    </View>
                    {props.name !== null ?
                        <Text style={{
                            textAlign: "left",
                            fontFamily: 'Sora-Regular',
                            fontSize: 20,
                        }}>{props.name}</Text> : <></>
                    }

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    marginTop: 30,
                    alignItems: "center",
                    width: "100%"
                }}>


                    <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>${props.amount}</Text>


                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'left',
                            fontFamily: 'Sora-SemiBold'
                        }}>{props.type === 0 ? "DuckBills" : props.type === 0 ? "Dining Dollars" : "Swipes"}</Text>
                </View>
                <View style={{
                    height: 1,
                    borderColor: '#f1f1f1',
                    width: '100%',
                    position: 'relative',
                    borderWidth: .2,
                    marginTop: 10
                }}>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    marginTop: 30,
                    alignItems: "flex-end",
                    width: "100%"
                }}>

                    <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>Date
                        Sent</Text>
                    <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>{
                        props.date
                    }</Text>

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    marginTop: 30,
                    alignItems: "flex-end",
                    width: "100%",
                    paddingBottom: 0
                }}>
                    <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>Time
                        Sent</Text>
                    {
                        UNIXToTime(time)
                    }

                </View>
                <TouchableOpacity onPress={() => {
                    props.navigation.push("MessageDetail", {data: props.message})
                }} style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    marginTop: 30,
                    alignItems: "flex-end",
                    width: "100%",
                    paddingBottom: 50
                }}>
                    <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>Message</Text>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>{
                            (props.message && props.message.length >= 10) ? props.message.substring(0, 9) + "..." : props.message
                        }
                        </Text>
                        <Ionicons name={"chevron-forward-outline"} style={{marginLeft: 4}} size={20}/>
                    </View>


                </TouchableOpacity>


                <View style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    justifyContent: 'center',
                    maxWidth: '100%',
                    marginTop: 0
                }}>
                    <TouchableOpacity onPress={() => {
                        Haptics.selectionAsync().then()
                        if (props.docID !== null) {
                            deleteRequest(props.fromID, "20011188", props.amount, 0, props.transactionID, props.docID).then(() => {
                                props.reloadActionOne("20011188")
                                props.reloadActionTwo("20011188")
                                props.panel.current?.togglePanel()
                                changeTransactionStatus(props.fromID, props.transactionID, 2).catch(()=>Toast.show({
                                    type: 'failToast',
                                    text1: 'Error',
                                }))
                            }).then(()=>Toast.show({
                                type: 'successToast',
                                text1: 'Failed To Reject',
                            })).catch(()=>Toast.show({
                                type: 'failToast',
                                text1: 'Failed To Reject',
                            }))
                        }
                    }
                    }

                                      style={{
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
                        }}>Reject</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        Haptics.selectionAsync().then()

                        if (props.docID !== null) {
                            acceptRequest(props.fromID, "20011188", props.amount, 0, props.transactionID, props.docID).then(() => {
                                props.reloadActionOne("20011188")
                                props.reloadActionTwo("20011188")
                                props.panel.current?.togglePanel()
                                changeTransactionStatus(props.fromID, props.transactionID, 1).catch(()=>{
                                    Toast.show({
                                        type: 'failToast',
                                        text1: 'Error',
                                    })
                                })
                            }).then(()=>Toast.show({
                                type: 'successToast',
                                text1: 'Failed To Accept',
                            })).catch(()=>Toast.show({
                                type: 'failToast',
                                text1: 'Failed To Accept',
                            }))
                        }

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
                        }}>Accept</Text>
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                             stroke="white" className="w-6 h-6">
                            <Path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>

                        </Svg>


                    </TouchableOpacity>
                </View>
            </View>

        </BottomSheet>
    )
}


export function Notifications() {

    const Stack = createStackNavigator();


    return (

        <NavigationContainer independent={true}>
            <Stack.Navigator
                lazy={true}
                optimizationsEnabled={true}
                screenOptions={{
                    headerShown: false,
                    useNativeDriver: false,
                }}
                initialRouteName="Notifications">
                <Stack.Screen name="Notifications" component={NotificationsComp}/>
                <Stack.Screen name="TransactionDetail" component={TransactionDetail}/>
                <Stack.Screen name="MessageDetail" component={MessageDetails}/>


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
        paddingBottom: 0,
    }
})