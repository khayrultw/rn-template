import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet, Dimensions } from "react-native";
import colors from "../styles/colors";

import { normalize } from "../utils";
import { useDimension } from "../hooks";

const { width, height} = Dimensions.get('screen');

const Loading = ({ loadingText }) => {

    const { dimension } = useDimension();

    return (
        <View style={
            loadingText === "" ?
                {
                    ...styles.container,
                    width: dimension.width,
                    height: dimension.height
                }
                :
                {
                    ...styles.container,
                    backgroundColor: '#00000077',
                    width: '100%',
                    height: '100%'
                }
        }>
            {loadingText !== "" ?
                <View style={{...styles.content, width: Math.min(dimension.width, dimension.height)-30}}>
                    <ActivityIndicator size="large" color={colors.primary}/>
                    <Text style={styles.text}>
                        {loadingText || 'Loading...'}
                    </Text>
                </View>
                :
                <View style={{...styles.contentWithoutText,  width: Math.min(dimension.width, dimension.height)-30}}>
                    <ActivityIndicator size="large" color={colors.primary}/>
                </View>
            }
        </View>
    )
};

Loading.defaultProps = {
    loadingText: "",
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: '#000000AA',
        height: height,
        justifyContent: 'center',
        width: width,
        zIndex: 100000
    },
    content: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 4,
        height: normalize(200),
        justifyContent: 'center',
    },
    contentWithoutText: {
        position: 'relative',
        alignItems: 'center',
        backgroundColor: colors.transparent,
        borderRadius: 4,
        height: normalize(80),
        justifyContent: 'center',
        width: normalize(80),
        top: normalize(-80)
    },
    text: {
        margin: 20,
        fontSize: normalize(16),
        color: colors.primary
    }

});

export default Loading;
