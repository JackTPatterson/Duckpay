import {Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import primaryColor from "../Constants";
import {acceptRequest, deleteRequest, getUser} from "../Scripts/HandleDB";
import {useEffect, useState} from "react";
import * as Haptics from "expo-haptics";

function TransactionItem(props){

    let name, setname;
    [name, setname] = useState(null);

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
        <TouchableOpacity onPress={()=> {
            if(props.nav !== null) {
                    props.nav.push("TransactionDetail", {data: props.docID})
            }
            Haptics.selectionAsync();

        }
        } style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: props.home ? 10: 25,
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
                    <Text style={{fontFamily: 'Sora-SemiBold'}}>{name}</Text>
                    { props.info !== null ?
                        <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular'}}>{props.info.toString()}</Text>
                    : <></>
                    }

                </View>
            </View>
            <View>
                <Text style={{fontFamily: 'Sora-SemiBold', marginTop: 10, textAlign: 'center', fontSize: 20}}>{(props.change.toString().includes(".") ? props.change : props.change + ".00")}</Text>
                <Text style={{fontFamily: 'Sora-SemiBold', marginTop: 2, textAlign: 'right', fontSize: 10}}>{props.status}</Text>

            </View>
        </TouchableOpacity>
    )

}

function RequestItem(props){

    let name, setname;
    [name, setname] = useState(null);

    useEffect(()=>{
        getUser(props.name).then(res=>{
            setname(res);
        })
    })

    let firstLetter = name;
    let lastLetter = "";

    try{
        firstLetter = name.split(" ")[0].slice(0, 1);
        lastLetter = name.split(" ")[1].slice(0, 1);
    }
    catch{}


    return (
        <TouchableOpacity onPress={() => {
            Haptics.impactAsync(Haptics.selectionAsync());
            props.data({amount: props.change, fromID: props.from, msg: props.message, docID: props.docID, transactionID: props.transactionID})
            props.panel.current?.togglePanel();
            console.log(props.transactionID)
        }
        }
          style={{
            borderRadius: 14,
            backgroundColor: '#f9f9f9',
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginBottom: 25,


        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <View
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 10,
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
                <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16, flex: 1}}>{name} would like to send you duckbills</Text>


            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>

                <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center', fontSize: 24}}>${props.change}</Text>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 10
                    }}>
                    </View>
            </View>

        </TouchableOpacity>

    )

}

export {TransactionItem, RequestItem}