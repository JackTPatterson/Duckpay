import {Easing, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Haptics from "expo-haptics";
import Svg, {Path} from "react-native-svg";
import BottomSheet from "react-native-simple-bottom-sheet";
import * as React from "react";
import {addFriend} from "../Scripts/HandleDB";
import Toast from "react-native-toast-message";

export function UserBottomSheet(props) {
    return (


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
            ref={(ref) => (props.panel.current = ref)}
        >
            <View style={{
                flexDirection: "row",
                width: '100%',
                alignItems: 'center',
                marginBottom: 30,
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 24,
                    fontFamily: 'Sora-SemiBold',
                    textAlign: 'center'
                }}>User</Text>

                <TouchableOpacity style={{
                    padding: 3,
                    width: 40,
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#f9f9f9",
                    borderRadius: 100
                }} onPress={() => props.panel.current.togglePanel()}>
                    <Ionicons name={"close-outline"} size={27}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {
                Haptics.selectionAsync()
                addFriend("20011188", props.friendID)
                props.toast.show({
                    type: 'tomatoToast',
                    text1: 'Friend Added'
                });
                props.panel.current.togglePanel();



            }} style={{
                borderRadius: 15,
                borderColor: '#f1f1f1',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                        style={{
                            padding: 15,
                            backgroundColor: '#f9f9f9',
                            borderRadius: 50,
                            marginRight: 10
                        }}>
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path
                                d="M11.4599 13.7299C13.0118 13.7299 14.2699 12.4718 14.2699 10.9199C14.2699 9.36794 13.0118 8.10986 11.4599 8.10986C9.90798 8.10986 8.6499 9.36794 8.6499 10.9199C8.6499 12.4718 9.90798 13.7299 11.4599 13.7299Z"
                                stroke="black" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                            <Path
                                d="M16.65 20.1998C16.65 17.8698 14.33 15.9697 11.46 15.9697C8.59002 15.9697 6.27002 17.8598 6.27002 20.1998"
                                stroke="black" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                            <Path
                                d="M21 12.5C21 17.75 16.75 22 11.5 22C6.25 22 2 17.75 2 12.5C2 7.25 6.25 3 11.5 3C12.81 3 14.06 3.25999 15.2 3.73999C15.07 4.13999 15 4.56 15 5C15 5.75 15.21 6.46 15.58 7.06C15.78 7.4 16.04 7.70997 16.34 7.96997C17.04 8.60997 17.97 9 19 9C19.44 9 19.86 8.92998 20.25 8.78998C20.73 9.92998 21 11.19 21 12.5Z"
                                stroke="black" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round"/>
                            <Path
                                d="M23 5C23 5.32 22.96 5.62999 22.88 5.92999C22.79 6.32999 22.63 6.72 22.42 7.06C21.94 7.87 21.17 8.49998 20.25 8.78998C19.86 8.92998 19.44 9 19 9C17.97 9 17.04 8.60997 16.34 7.96997C16.04 7.70997 15.78 7.4 15.58 7.06C15.21 6.46 15 5.75 15 5C15 4.56 15.07 4.13999 15.2 3.73999C15.39 3.15999 15.71 2.64002 16.13 2.21002C16.86 1.46002 17.88 1 19 1C20.18 1 21.25 1.51002 21.97 2.33002C22.61 3.04002 23 3.98 23 5Z"
                                stroke="black" strokeWidth={2} stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round"/>
                            <Path d="M20.4898 4.97998H17.5098" stroke="black" strokeWidth={2} stroke-miterlimit="10"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <Path d="M19 3.52002V6.51001" stroke="black" strokeWidth={2} stroke-miterlimit="10"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                    </View>
                    <Text style={{marginRight: 10, fontFamily: 'Sora-SemiBold'}}>
                        Add Friend
                    </Text>
                </View>


            </TouchableOpacity>
        </BottomSheet>
    )
}