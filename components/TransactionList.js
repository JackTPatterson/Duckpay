import {Text, View} from "react-native";
import * as React from "react";
import primaryColor from "../Constants";
export function TransactionList(props){

    const firstLetter = props.name.split(" ")[0].slice(0, 1);
    const lastLetter = props.name.split(" ")[1].slice(0, 1);

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 25,
        }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{

                    borderRadius: '100%',

                }}>
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: '100%',
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: primaryColor,


                        }}
                    >
                        <Text style={{
                            fontFamily: "Sora-SemiBold",
                            fontSize: 16,
                            color: "white",
                        }}>{firstLetter}{lastLetter}</Text>
                    </View>
                </View>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontFamily: 'Sora-SemiBold'}}>{props.name}</Text>
                    <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>{props.info}</Text>
                </View>
            </View>
            <Text style={{fontFamily: 'Sora-SemiBold', marginTop: 10, textAlign: 'center', fontSize: 20}}>{props.change}</Text>



        </View>
    )

}

