import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import primaryColor from "../Constants";
import {acceptRequest, deleteRequest, getUser, getUserColor} from "../Scripts/HandleDB";
import {useEffect, useState} from "react";
import * as Haptics from "expo-haptics";

function FriendItem(props){


    const [name, setName] = useState("ALoading AName");

    const [color, setColor] = useState(primaryColor);

    useEffect(()=>{
        getUser(props.name).then(res=>{
            setName(res);
        }).then(()=>{
            getUserColor(props.name).then((res)=>{
                setColor(res)

            })
        })
    })



    let firstLetter = "";
    let lastLetter = ""

    try{
        firstLetter = name.split(" ")[0].slice(0, 1);
        lastLetter = name.split(" ")[1].slice(0, 1);
    }
    catch{}

    return (
        <TouchableOpacity onPress={()=>{
            props.navigate.push("Keypad", {data: props.name, docID: props.docID})
            Haptics.selectionAsync().then();

        }} style={{
            alignItems: 'center',
            marginTop: 20,
            borderRadius: '20%',

        }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{

                    borderRadius: '100%',

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
                        <Text style={{
                            fontFamily: "Sora-SemiBold",
                            fontSize: 20,
                            color: "white",
                        }}>{firstLetter}{lastLetter}</Text>
                    </View>
                </View>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16}}>{name}</Text>
                </View>
            </View>

        </TouchableOpacity>

    )

}


export default FriendItem