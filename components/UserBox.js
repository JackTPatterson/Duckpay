import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import primaryColor from "../Constants";
import {getUser} from "../Scripts/HandleDB";
import {useEffect, useState} from "react";
export function UserBox(props){

    const [name, setname] = useState(null);

    useEffect(()=>{
        getUser(props.name).then(res=>{
            setname(res);
        })
    })

    let firstLetter = name;
    let lastLetter = ""

    try{
        firstLetter = name.split(" ")[0].slice(0, 1);
        lastLetter = name.split(" ")[1].slice(0, 1);
    }
    catch{}

    return (
        <TouchableOpacity onPress={()=>{
            props.navigate.push("Keypad", {data: props.name})
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
                            backgroundColor: primaryColor,


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

