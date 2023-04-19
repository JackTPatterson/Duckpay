import {Dimensions} from "react-native";

const getInterpolatedVal = (val) => {
    return val.interpolate({
        inputRange: [0, 1],
        outputRange: [Dimensions.get("window").width / 12, 0],
        extrapolate: 'extend',
    });
};

const getInterpolatedOpacity = (val) => {
    return val.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1.5],
        extrapolate: 'extend',
    });
};

const forFade = ({ current }) => ({
    cardStyle: {
        transform: [{
            translateX: getInterpolatedVal(current.progress)
        }],
        opacity: getInterpolatedOpacity(current.progress)
    },
});

export {forFade}