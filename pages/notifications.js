import {
    AppLoading,
    Dimensions,
    Easing,
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
import { SafeAreaView } from "react-navigation";
import {useFonts} from "expo-font";
import {TransactionItem, RequestItem} from "../components/TransactionItem";
import {useCallback, useEffect, useState} from "react";
import primaryColor from "../Constants";
import BottomSheet from "react-native-simple-bottom-sheet";
import {timeConverter} from "../Scripts/timeconverter";
import {NavigationContainer} from "@react-navigation/native";
import {TransactionDetail} from "./TransactionDetail";
import {createStackNavigator} from "@react-navigation/stack";
import {forFade} from "../Scripts/home/interpolators";
import Toast from "react-native-toast-message";
import {toastConfig} from "../Scripts/toast";

export const NotificationsComp = ({navigation}) => {
    const [data, setData] = useState(null)
    const [today, setToday] = useState(null);

    const [request, setRequests] = useState(null);
    const panelRef = React.useRef(null);

    const [currentData, setCurrentData] = useState({});


    useEffect(()=> {
        if(request == null){
            getRequestsList("20011188")
        }
        if(data == null){
            getTransactionsList("20011188")
        }
    })

    function getTransactionsList(id){

        getTransactions(id).then(res => {
            let todayLst = []
            let lst = []
            res.forEach((data)=> {
                if(new Date(data.data().date.seconds*1000).toDateString() === new Date().toDateString()){
                    todayLst.push(data);
                }
                else {
                    if(lst.length < 10) {
                        lst.push(data);
                    }
                }
                }
            )
            setData(lst)
            setToday(todayLst);
        })

    }





    function getRequestsList(id) {
        getRequest(id).then(res => {
            let lst = []
            res.forEach((data)=> {
                    lst.push(data)
                }
            )
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

  if(!fontLoaded){
    return <></>
  }
  else

  return (
    <View>
      <SafeAreaView style={styles.body}>

        <View>
            <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24, marginBottom: 20, zIndex: 1}}>Activity</Text>
        </View>
          <ScrollView horizontal={false} refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          }>
              {request != null ? (
                  request.map(dt => {
                      if(dt.data().amount !== undefined)
                          return <RequestItem data={setCurrentData} transactionID={dt.data().transactionID} panel={panelRef} message={dt.data().message} docID={dt.id} from={dt.data().from} id={dt.id} change={dt.data().amount} name={dt.data().from} type={dt.data().type}/>
                  })
              ) : (
                  <></>
              )}
              {today !== null && today.length > 0 ?
                  <Text style={{ fontSize: 20,
                      fontFamily: 'Sora-Regular',
                      marginBottom: 10}}>Today</Text> : <></>
              }
              {today !== null && today.length > 0 ? (
                  today.map(dt => {
                      let statusText = "";
                      if(dt.data().status === 0){
                          statusText = "Pending"
                      }
                      if(dt.data().status === 1){
                          statusText = "Accepted"
                      }
                      if(dt.data().status === 2){
                          statusText = "Rejected"
                      }

                      if(dt.data().price !== undefined)
                          return <TransactionItem nav={navigation} docID={dt.id} status={statusText} info={timeConverter(dt.data().date.seconds)}  change={dt.data().recieved ? "+$" + dt.data().price : "-$" + dt.data().price} name={dt.data().to}/>
                  })
              ) : (
                  <></>
              )}
              {today !== null && today.length > 0 ?
                  <Text style={{ fontSize: 20,
                      fontFamily: 'Sora-Regular',
                      marginBottom: 10}}>All Transactions</Text> : <></>
              }
              {data != null ? (
                  data.map(dt => {
                      let statusText = "";
                      if(dt.data().status === 0){
                          statusText = "Pending"
                      }
                      if(dt.data().status === 1){
                          statusText = "Accepted"
                      }
                      if(dt.data().status === 2){
                          statusText = "Rejected"
                      }

                      if(dt.data().price !== undefined)
                      return <TransactionItem nav={navigation} docID={dt.id} status={statusText} info={timeConverter(dt.data().date.seconds)}  change={dt.data().recieved ? "+$" + dt.data().price : "-$" + dt.data().price} name={dt.data().to}/>
                  })
              ) : (
                  <></>
              )}
          </ScrollView>
      </SafeAreaView>
        <Accept panel={panelRef} reloadActionOne={getRequestsList} reloadActionTwo={getTransactionsList} transactionID={currentData.transactionID} amount={currentData.amount} fromID={currentData.fromID} message={currentData.msg} docID={currentData.docID}/>
        <Toast config={toastConfig}/>
    </View>
  );
}

function Accept(props){


    const [name, setName] = useState(null);

    useEffect(()=>{
        getUser(props.fromID).then((res)=>{
            setName(res)
        })

    })


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
            <View style={{
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
                <View>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>
                       <View style={{
                            marginBottom: 10,
                            backgroundColor: 'white',
                            borderRadius: '100%',
                            flexDirection: 'column',
                        }}>
                            <View
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '100%',
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: primaryColor,


                                }}
                            >
                                <Text style={{
                                    fontFamily: "Sora-SemiBold",
                                    fontSize: 36,
                                    color: "white",
                                }}>JP</Text>
                            </View>
                        </View>

                        {/*<LottieView*/}
                        {/*    ref={animation}*/}
                        {/*    style={{*/}
                        {/*        width: 150,*/}
                        {/*        height: 150*/}
                        {/*    }}*/}
                        {/*    speed={.9}*/}
                        {/*    loop={false}*/}
                        {/*    source={require('../assets/complete.json')}*/}
                        {/*/>*/}

                        <Text style={{
                            fontSize: 20,
                            marginTop: 20,
                            fontFamily: 'Sora-Regular',
                            textAlign: 'center'
                        }}>Incoming Payment by</Text>
                        {name != null ?
                        <Text style={{
                            fontSize: 24,
                            marginTop: 10,
                            fontFamily: 'Sora-SemiBold',
                            textAlign: 'center'
                        }}>{name}</Text>
                            : <></>
                        }

                        <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 30, alignItems: "center", width: "100%"}}>
                            {props.amount != null ?
                            <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 36}}>${props.amount.includes(".") ? props.amount : props.amount + ".00"}</Text>
                                : <></>
                            }
                                <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>DuckBills</Text>
                            {/* TODO: CHANGE TYPE TO DYNAMIC */}

                        </View>
                        <View style={{height: 1, borderColor: '#f1f1f1', width: '100%', position: 'relative', borderWidth: .2, marginTop: 10}}>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: "flex-start", marginTop: 30, alignItems: "flex-start", width: "100%"}}>

                            <Text style={{fontFamily: 'Sora-Regular', fontSize: 16, color: 'gray'}}>Message</Text>
                            <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16, color: 'black', marginTop: 10}}>{props.message}</Text>




                        </View>

                        <View style={{
                            flexDirection: 'row',
                            marginBottom: 20,
                            justifyContent: 'center',
                            maxWidth: '100%',
                            marginTop: 20
                        }}>

                            <TouchableOpacity onPress={() => {
                                Haptics.selectionAsync()
                                if(props.docID !== null) {
                                    deleteRequest(props.fromID, "20011188", props.amount, 0, props.transactionID, props.docID).then(()=>{
                                        props.reloadActionOne("20011188")
                                        props.reloadActionTwo("20011188")
                                        props.panel.current?.togglePanel()
                                        changeTransactionStatus(props.fromID, props.transactionID, 2)

                                    })

                                    //Modify transaction to change status to rejected - 2
                                }
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
                                Haptics.selectionAsync()

                                if(props.docID !== null) {
                                    acceptRequest(props.fromID, "20011188", props.amount, 0, props.transactionID, props.docID).then(()=>{
                                        props.reloadActionOne("20011188")
                                        props.reloadActionTwo("20011188")
                                        props.panel.current?.togglePanel()
                                        changeTransactionStatus(props.fromID, props.transactionID, 1)
                                    })
                                }

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


                    </View>

                </View>

            </View>

        </BottomSheet>
    )
}


export function Notifications(){

    const Stack = createStackNavigator();


        return (

            <NavigationContainer independent={true}>
                <Stack.Navigator
                    lazy={true}
                    optimizationsEnabled={true}
                    screenOptions={{
                        headerShown: false,
                        useNativeDriver: false,
                        cardStyleInterpolator: forFade,
                    }}
                    initialRouteName="Notifications">
                    <Stack.Screen name="Notifications" component={NotificationsComp}/>
                    <Stack.Screen name="TransactionDetail" component={TransactionDetail}/>


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