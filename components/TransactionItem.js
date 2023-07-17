import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import primaryColor from "../Constants";
import {acceptRequest, deleteRequest, getUser, getUserColor} from "../Scripts/HandleDB";
import {useEffect, useState} from "react";
import * as Haptics from "expo-haptics";
import {GetType} from "../Scripts/GetType";

function TransactionItem(props){

    let name, setname;
    [name, setname] = useState(null);

    const [color, setColor] = useState(primaryColor);


    useEffect(()=>{
        getUser(props.name).then(res=>{
            setname(res);
        }).then(()=>{
            getUserColor(props.name).then((res)=>{
                setColor(res)

            })
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
            Haptics.selectionAsync().then();

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
                            borderRadius: 150,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: color,
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
                <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center', fontSize: 20}}>{(props.change.toString().includes(".") ? props.change : props.change + ".00")}</Text>
                <Text style={{color: '#aaacae', fontFamily: 'Sora-Regular', textAlign: 'right'}}>{props.status}</Text>

            </View>
        </TouchableOpacity>
    )

}

function RequestItem(props){

    let name, setname;
    [name, setname] = useState(null);

    const [color, setColor] = useState(primaryColor);


    useEffect(()=>{
        getUser(props.name).then(res=>{
            setname(res);
        }).then(()=>{
            getUserColor(props.name).then((res)=>{
                setColor(res)

            })
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
            Haptics.selectionAsync().then()
            if(name !== null) {
                props.data({
                    amount: props.change,
                    name: name,
                    msg: props.message,
                    docID: props.docID,
                    transactionID: props.transactionID,
                    fromID: props.fromID,
                    type: props.type,
                    date: props.date,
                })
            }
                props.panel.current?.togglePanel();
        }
        }
          style={{
              width: Dimensions.get("window").width,
              maxWidth: Dimensions.get("window").width - 30,
            borderRadius: 14,
            backgroundColor: '#f9f9f9',
            paddingHorizontal: 10,
            paddingVertical: 20,
            marginBottom: 10
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10
            }}>
                <View
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 10,
                        borderRadius: 150,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: color,
                    }}
                >
                    <Text style={{
                        fontFamily: "Sora-SemiBold",
                        fontSize: 16,
                        color: "white",
                    }}>{firstLetter}{lastLetter}</Text>
                </View>
                <Text style={{fontFamily: 'Sora-SemiBold'}}>{name}</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 30
            }}>

                <Text style={{fontFamily: 'Sora-SemiBold', textAlign: 'center', fontSize: 24}}>{props.type === 2 ? "" : "$"}{props.change}</Text>
                <GetType type={props.type}/>
            </View>

        </TouchableOpacity>

    )

}

export {TransactionItem, RequestItem}