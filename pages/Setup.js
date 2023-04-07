import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AppLoading,
    SafeAreaView, Dimensions
} from "react-native";
import {
    useFonts,
} from "expo-font";
import * as React from "react";
import primaryColor from "../Constants";
import LottieView from "lottie-react-native";
import {useEffect, useRef, useState} from "react";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();


export const Setup = ({navigation, route}) => {

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
        iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",

    });

    useEffect(() => {
        if (response?.type === "success") {
            setToken(response.authentication.accessToken);
            getUserInfo();
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
        } catch (error) {
            // Add your own error handler here
        }
    };

    return (
        <View style={styles.container}>
            {userInfo === null ? (
                <Button
                    title="Sign in with Google"
                    disabled={!request}
                    onPress={() => {
                        promptAsync();
                    }}
                />
            ) : (
                <Text style={styles.text}>{userInfo.name}</Text>
            )}
        </View>
    );

}