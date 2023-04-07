import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import primaryColor from "../Constants";
export function UserBox(props){

    const firstLetter = props.name.split(" ")[0].slice(0, 1);
    const lastLetter = props.name.split(" ")[1].slice(0, 1);

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
                <View>
                    <Text style={{fontFamily: 'Sora-SemiBold'}}>{props.name.split(" ")[0]}</Text>
                    <Text style={{fontFamily: 'Sora-SemiBold'}}>{props.name.split(" ")[1]}</Text>

                </View>
            </View>




        </TouchableOpacity>
    )

}

