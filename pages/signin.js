import {useEffect, useRef, useState} from "react";
import {StyleSheet, Text, View, Button, SafeAreaView, Dimensions, TouchableOpacity} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from "lottie-react-native";
import primaryColor from "../Constants";

WebBrowser.maybeCompleteAuthSession();

export const SignIn = ({navigation}) => {
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);


    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: "973544241416-k5oaq15d8f06p4in6o6qb77druju8rr8.apps.googleusercontent.com",
        expoClientId: '973544241416-fciquvtpnu3uvpiaedim475sdbgl3ab3.apps.googleusercontent.com'
    });

    const animation = useRef(null);

    useEffect(()=>{
        animation.current?.play()
    })

    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication.accessToken);
            getUserInfo()
        }
    }, [response, token]);

    const getUserInfo = async () => {
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            setUserInfo(user);
            console.log(user)
        } catch (error) {
            // Add your own error handler here
        }
    };

    return (
        <SafeAreaView>
            <View style={{marginTop: 30, marginHorizontal: 15, flexDirection: "column", justifyContent: "space-between", height: '100%'}}>
                <View>
                    <Text style={{fontFamily: 'Sora-SemiBold', fontSize: 24}}>Lets Get Started</Text>
                </View>
                <Text></Text>

                <LottieView
                    ref={animation}
                    style={{
                        width: Dimensions.get("window").width - 100,
                        height: Dimensions.get("window").width - 100,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                    speed={.9}
                    loop={true}
                    source={require('../assets/login.json')}
                />

                <TouchableOpacity onPress={() => {
                    promptAsync().then(()=>navigation.push("App"))
                }} style={{
                    width: '100%',
                    marginBottom: 100,
                    borderWidth: 1,
                    borderColor: primaryColor,
                    backgroundColor: primaryColor,
                    padding: 15,
                    borderRadius: '100%',
                    marginTop: 10
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontFamily: 'Sora-Regular',
                        fontSize: 20,
                        color: 'white'
                    }}>Sign In</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
});