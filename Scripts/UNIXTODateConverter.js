import {Text} from "react-native";
import * as React from "react";

export function UNIXTODateConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    let time;
    if (new Date().getFullYear() === year) {
        time = month + ' ' + date
    } else {
        time = month + ' ' + date + ' ' + year
    }
    return time;
}

export function UNIXToTime(UNIX_timestamp) {


    let time = UNIX_timestamp.toLocaleString().split(", ")[1];


    return time !== undefined ? (
        <Text style={{fontFamily: 'Sora-Regular', fontSize: 16}}>
            {
                time.toString().split(":")[0]
                + ":"
                + time.toString().split(":")[1]
            }
            {
                time.toString().includes("AM") ? " AM" : " PM"
            }



        </Text>
    ) : <Text>Error</Text>

}
