import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import primaryColor from "../Constants";
import {getUser, getUserColor} from "../Scripts/HandleDB";
import {useEffect, useState} from "react";
import * as Haptics from "expo-haptics";
export function UserBox(props){


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
        <TouchableOpacity send onLongPress={()=>{
            if(!props.send) {
                props.panel.current?.togglePanel();
                Haptics.selectionAsync();
            }
        }} onPress={()=>{
            props.navigate.push("Keypad", {data: props.name, docID: props.docID})
            Haptics.selectionAsync();

        }} style={{
            alignItems: 'center',
            marginTop: 20,
            borderRadius: '20%',

        }}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <View style={{
                    marginBottom: 10,
                    backgroundColor: 'white',
                    borderRadius: '100%',
                    flexDirection: 'column',
                }}>
                    <View
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: '100%',
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: color


                        }}
                    >
                        <Text style={{
                            fontFamily: "Sora-SemiBold",
                            fontSize: 26,
                            color: "white",
                        }}>{firstLetter}{lastLetter}</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center'}}>{name != null ? name.split(" ")[0] : ""}</Text>
                    <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center'}}>{name != null ? name.split(" ")[1] : ""}</Text>

                </View>
            </View>




        </TouchableOpacity>
    )

}

