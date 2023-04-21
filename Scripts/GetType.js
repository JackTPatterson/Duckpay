import {Text} from "react-native";

export function GetType(props){


    if(props.type === 0){
        return <Text style={!props.center ? {fontFamily: 'Sora-Regular', fontSize: 16, } : {textAlign: 'center', fontFamily: 'Sora-SemiBold', fontSize: 20}}>Duckbills</Text>
    }
    if(props.type === 1){
        return <Text style={!props.center ? {fontFamily: 'Sora-Regular', fontSize: 16} : {textAlign: 'center', fontFamily: 'Sora-SemiBold', fontSize: 20}}>Dining Dollars</Text>
    }
    if(props.type === 2){
        return <Text style={!props.center ? {fontFamily: 'Sora-Regular', fontSize: 16} : {textAlign: 'center', fontFamily: 'Sora-SemiBold', fontSize: 20}}>Swipes</Text>
    }
}

export function GetRequestType(props){


    if(props.type === 0){
        return  <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16, flex: 1}}>{props.name} would like to send you Duckbills</Text>
    }
    if(props.type === 1){
        return  <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16, flex: 1}}>{props.name} would like to send you Dining Dollars</Text>
    }
    if(props.type === 2){
        return  <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 16, flex: 1}}>{props.name} would like to send you swipes</Text>
    }
}