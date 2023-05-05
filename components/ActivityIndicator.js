import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import LottieView from "lottie-react-native";

function LoadingPage () {
    const animation = useRef(null);

    useEffect(()=>{
        animation.current?.play();
    })

    return (

        <View style={[styles.container, styles.horizontal]}>
            <LottieView
                ref={animation}
                style={{
                    width: 150,
                    height: 150
                }}
                speed={1}
                loop={true}
                source={require('../assets/pageloading.json')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default LoadingPage;